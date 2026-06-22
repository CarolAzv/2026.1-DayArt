import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProdutoData } from './form/produto.form';
import { ProdutoService } from './service/produto.service';

import { ProdutoListarComponent } from './component/produto/listar/produto.listar.component';
import { ProdutoSalvarComponent } from './component/produto/salvar/produto.salvar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProdutoListarComponent, ProdutoSalvarComponent],
  templateUrl: 'html/app.html',
  styleUrl: 'html/css/app.css'
})

export class App {
  protected readonly local = signal('Menu Principal');
  protected readonly produtos = signal<ProdutoData[]>([]);

  constructor(private produtoService: ProdutoService) {
    this.produtos.set(this.produtoService.listar());
    effect(() => this.produtoService.salvar(this.produtos()));
  }
}