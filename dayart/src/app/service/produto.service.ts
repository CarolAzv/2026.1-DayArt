import { Injectable } from '@angular/core';
import { produtoData } from '../form/produto.form';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private readonly chave = 'produtos';

  listar(): produtoData[] {
    const json = localStorage.getItem(this.chave);
    return json ? JSON.parse(json) : [];
  }

  salvar(produto: produtoData[]): void {
    localStorage.setItem(this.chave, JSON.stringify(produto));
  }

  deletar(produto: produtoData): void {
    const produtos = this.listar();
    const index = produtos.findIndex((item) => item.nome === produto.nome);
    if (index !== -1) {
      produtos.splice(index, 1);
      this.salvar(produtos);
    }
  }

  atualizar(produtoAtualizado: produtoData): void {
    const produtos = this.listar();
    const index = produtos.findIndex((item) => item.nome === produtoAtualizado.nome);
    if (index !== -1) {
      produtos[index] = produtoAtualizado;
      this.salvar(produtos);
    }
  }
}