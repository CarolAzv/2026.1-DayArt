import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormField, form, required, submit } from '@angular/forms/signals';
import { UsuarioService } from '../../../service/usuario.service';
import { Usuario } from '../../../app.model';

@Component({
  standalone: true,
  selector: 'app-alterar',
  imports: [ButtonModule],
  templateUrl: './usuario.atualizar.html',
  styleUrl: './usuario.atualizar.css',
})


export class UsuarioAtualizarComponent implements OnInit { // ← typo corrigido
  private readonly usuarioService = inject(UsuarioService);
  protected readonly editando = signal(false);

  @Input() usuarios!: WritableSignal<Usuario[]>;
  @Input() usuarioSelecionado!: Usuario;
  @Input() index!: number;

  protected readonly usuarioModel = signal<Usuario>({
    nome: '',
    email: '',
    celular: '',
    localizacao: { estado: '', cidade: '', rua: '', numero: 0 },
  });

  protected readonly usuarioForm = form(this.usuarioModel, (schema) => {
    required(schema.nome, { message: 'Um nome é necessário' });
    required(schema.localizacao.estado, { message: 'Estado é obrigatório' });
    required(schema.localizacao.cidade, { message: 'Cidade é obrigatória' });
    required(schema.localizacao.rua, { message: 'Rua é obrigatória' });
  });

  ngOnInit(): void {
    this.usuarioModel.set({ ...this.usuarioSelecionado });
  }

  alternarEdicao(): void {
    this.editando.update((atual) => !atual);
    if (!this.editando()) {
      this.resetar(); // ao fechar, restaura dados originais
    }
  }

  alterarUsuario(event: Event): void {
    event.preventDefault();

    submit(this.usuarioForm, async () => {
      const usuarioAtualizado: Usuario = { ...this.usuarioModel() };

      this.usuarioService.atualizar(usuarioAtualizado);

      this.usuarios.update((lista) => {
        const atualizada = [...lista];
        atualizada[this.index] = usuarioAtualizado;
        return atualizada;
      });

      this.editando.set(false);
      this.resetar();
    });
  }

  resetar(): void {
    this.usuarioForm().reset();
    this.usuarioModel.set({ ...this.usuarioSelecionado });
  }
}