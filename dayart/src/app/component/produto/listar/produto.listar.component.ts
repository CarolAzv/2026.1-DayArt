import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';
import { ProdutoService } from '../../../service/produto.service';
import { Produto } from '../../../app.model';

import { ProdutoAtualizarComponent } from '../atualizar/produto.atualizar.component';
import { ProdutoDeletarComponent } from '../deletar/produto.deletar.component';


@Component({
  standalone: true,
  selector: 'app-produto-listar',
  imports: [ButtonModule, ProdutoAtualizarComponent, ProdutoDeletarComponent, CurrencyPipe],
  templateUrl: './produto.listar.html',
  styleUrl: './produto.listar.css',
})


export class ProdutoListarComponent {
  private readonly produtoService = inject(ProdutoService);

  produtos = signal<Produto[]>([]);
  mensagem = signal<string | null>(null);

  constructor() {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.mensagem.set(null);

    try {
      const lista = this.produtoService.listar();
      this.produtos.set(lista);
    } catch {
      this.mensagem.set('Nada achado aqui, volte mais tarde.');
    }
  }

  deletarProduto(produto: Produto): void {
    this.produtoService.deletar(produto);

    this.produtos.update((lista) => lista.filter((p) => p.nome !== produto.nome));
  }
}