import { Injectable } from '@angular/core';
import { usuarioData } from '../form/usuario.form';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private readonly chave = 'usuarios';

  listar(): usuarioData[] {
    const json = localStorage.getItem(this.chave);
    return json ? JSON.parse(json) : [];
  }

  salvar(usuario: usuarioData[]): void {
    localStorage.setItem(this.chave, JSON.stringify(usuario));
  }

  deletar(usuario: usuarioData): void {
    const usuarios = this.listar();
    const index = usuarios.findIndex((item) => item.nome === usuario.nome);
    if (index !== -1) {
      usuarios.splice(index, 1);
      this.salvar(usuarios);
    }
  }

  atualizar(usuarioAtualizado: usuarioData): void {
    const usuarios = this.listar();
    const index = usuarios.findIndex((item) => item.nome === usuarioAtualizado.nome);
    if (index !== -1) {
      usuarios[index] = usuarioAtualizado;
      this.salvar(usuarios);
    }
  }
}