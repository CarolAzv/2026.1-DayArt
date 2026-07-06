import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProdutoListarComponent } from './component/produto/listar/produto.listar.component';
//import { ContaPage } from './conta-page';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: ProdutoListarComponent,
  },
];