import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UsuarioService } from '../../../service/usuario.service';
import { Usuario } from '../../../app.model';

@Component({
  standalone: true,
  selector: 'app-usuario-listar',
  imports: [ButtonModule],
  templateUrl: './usuario.listar.html',
  styleUrl: './usuario.listar.css',
})
export class UsuarioListarComponent {
  private readonly usuarioService = inject(UsuarioService);

  usuarios = signal<Usuario[]>([]);
  mensagem = signal<string | null>(null);

  constructor() {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.mensagem.set(null);

    this.usuarioService.listar().subscribe({
      next: (lista) => this.usuarios.set(lista),
      error: () => this.mensagem.set('Nada achado aqui, volte mais tarde.'),
    });
  }

  deletarUsuario(usuario: Usuario): void {
    this.usuarioService.deletar(usuario).subscribe({
      next: () => {
        this.usuarios.update((lista) => lista.filter((u) => u.id !== usuario.id && u.nome !== usuario.nome));
      },
      error: () => this.mensagem.set('Não foi possível remover o usuário.'),
    });
  }
}