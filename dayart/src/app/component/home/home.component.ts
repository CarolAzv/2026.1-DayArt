import { Component, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Produto } from '../../app.model';
import { ProdutoService } from '../../service/produto.service';

import { ProdutoListarComponent } from '../produto/listar/produto.listar.component';
import { ProdutoSalvarComponent } from '../produto/salvar/produto.salvar.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ProdutoListarComponent, ProdutoSalvarComponent],
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})

export class HomeComponent {
  protected readonly local = signal('Menu Principal');
  protected readonly produtos = signal<Produto[]>([]);

  constructor(private produtoService: ProdutoService) {
    this.produtos.set(this.produtoService.listar());
    effect(() => this.produtoService.salvar(this.produtos()));
  }
}