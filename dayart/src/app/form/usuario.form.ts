import { signal } from '@angular/core';
import { form, required, minLength, min, validate } from '@angular/forms/signals';
import { Usuario } from '../app.model';

export function CriarUsuarioForm(usuarioInicial?: Usuario) {
  const usuarioData = signal<Usuario>(
    usuarioInicial ?? {
      nome: '',
      email: '',
      celular: '',
      localizacao: {
        estado: '',
        cidade: '',
        rua: '',
        numero: 0,
      },
    },
  );

  const usuarioForm = form(usuarioData, (schema) => {
    required(schema.nome, { message: 'Nome é obrigatório' });
    minLength(schema.nome, 3, { message: 'Nome deve ter pelo menos 3 caracteres' });

    // email opcional, mas se preenchido deve ter formato válido
    validate(schema.email, ({ value }) => {
      const email = value();
      if (!email) return null;

      const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      return valido ? null : { kind: 'emailInvalido', message: 'E-mail inválido' };
    });

    // celular opcional, mas se preenchido deve ter 11 dígitos (DDD + número)
    validate(schema.celular, ({ value }) => {
      const celular = value();
      if (!celular) return null;

      const digitos = celular.replace(/\D/g, '');
      return digitos.length === 11
        ? null
        : { kind: 'celularInvalido', message: 'Celular deve ter 11 dígitos (DDD + número) ou ficar vazio' };
    });

    required(schema.localizacao.estado, { message: 'Estado é obrigatório para localização' });
    required(schema.localizacao.cidade, { message: 'Cidade é obrigatória para localização' });
    required(schema.localizacao.rua, { message: 'Rua é obrigatória para localização' });
    min(schema.localizacao.numero, 1, { message: 'Número deve ser maior que 0' });
  });

  return { usuarioForm, usuarioData };
}