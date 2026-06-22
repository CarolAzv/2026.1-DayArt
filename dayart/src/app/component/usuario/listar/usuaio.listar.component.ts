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

    try {
      const lista = this.usuarioService.listar();
      this.usuarios.set(lista);
    } catch {
      this.mensagem.set('Nada achado aqui, volte mais tarde.');
    }
  }

  deletarUsuario(usuario: Usuario): void {
    this.usuarioService.deletar(usuario);

    this.usuarios.update((lista) => lista.filter((u) => u.nome !== usuario.nome));
  }
}