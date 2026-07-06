import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProdutoListarComponent } from './component/produto/listar/produto.listar.component';
import { ProdutoSalvarComponent } from './component/produto/salvar/produto.salvar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ProdutoListarComponent, ProdutoSalvarComponent],
  templateUrl: './html/app.html',
  styleUrls: ['./html/css/app.css']
})

export class App {
  protected readonly local = signal('Menu Principal');
}