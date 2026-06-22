import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Usuario } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly chave = 'usuarios';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  listar(): Usuario[] {
    if (!this.isBrowser) return []
    try {
      const json = localStorage.getItem(this.chave);
      return json ? JSON.parse(json) : [];
    } catch {
        return []
    }
  }

  salvar(usuarios: Usuario[]): void {
    if (!this.isBrowser) return
    localStorage.setItem(this.chave, JSON.stringify(usuarios));
  }

  incluir(usuario: Usuario): void {
    const usuarios = this.listar();
    usuarios.push(usuario);
    this.salvar(usuarios);
  }

  deletar(usuario: Usuario): void {
    const usuarios = this.listar();
    const index = usuarios.findIndex((item) => item.nome === usuario.nome);
    if (index !== -1) {
      usuarios.splice(index, 1);
      this.salvar(usuarios);
    }
  }

  atualizar(usuarioAtualizado: Usuario): void {
    const usuarios = this.listar();
    const index = usuarios.findIndex((item) => item.nome === usuarioAtualizado.nome);
    if (index !== -1) {
      usuarios[index] = usuarioAtualizado;
      this.salvar(usuarios);
    }
  }
}