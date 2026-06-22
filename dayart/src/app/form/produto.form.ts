import { signal } from '@angular/core';
import { form, required, minLength, min } from '@angular/forms/signals';
import { Produto } from '../app.model';

export function CriarProdutoForm(produtoInicial?: Produto) {
  const produtoData = signal<Produto>(
    produtoInicial ?? {
      nome: '',
      descricao: '',
      preco: 0,
      estoque: 0,
    },
  );

  const produtoForm = form(produtoData, (schema) => {
    required(schema.nome, { message: 'Nome é obrigatório' });
    minLength(schema.nome, 3, { message: 'Nome deve ter pelo menos 3 caracteres' });

    min(schema.preco, 0, { message: 'Preço não pode ser negativo' });
    min(schema.estoque, 0, { message: 'Estoque não pode ser negativo' });
  });

  return { produtoForm, produtoData };
}
