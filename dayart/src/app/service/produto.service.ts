import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Produto } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly chave = 'produtos';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  listar(): Produto[] {
    if (!this.isBrowser) return []
    try {
      const json = localStorage.getItem(this.chave);
      return json ? JSON.parse(json) : [];
    } catch {
        return []
    }
  }

  salvar(produtos: Produto[]): void {
    if (!this.isBrowser) return
    localStorage.setItem(this.chave, JSON.stringify(produtos));
  }

  incluir(produto: Produto): void {
    const produtos = this.listar();
    produtos.push(produto);
    this.salvar(produtos);
  }

  deletar(produto: Produto): void {
    const produtos = this.listar();
    const index = produtos.findIndex((item) => item.nome === produto.nome);
    if (index !== -1) {
      produtos.splice(index, 1);
      this.salvar(produtos);
    }
  }

  atualizar(produtoAtualizado: Produto): void {
    const produtos = this.listar();
    const index = produtos.findIndex((item) => item.nome === produtoAtualizado.nome);
    if (index !== -1) {
      produtos[index] = produtoAtualizado;
      this.salvar(produtos);
    }
  }
}