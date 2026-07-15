import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormField, form, required, submit } from '@angular/forms/signals';
import { ProdutoService } from '../../../service/produto.service';
import { Produto } from '../../../app.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-produto-atualizar',
  imports: [ButtonModule, FormField],
  templateUrl: './produto.atualizar.html',
  styleUrl: './produto.atualizar.css',
})
export class ProdutoAtualizarComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly produtoService = inject(ProdutoService);
  protected readonly editando = signal(false);

  // guarda o produto original vindo da API, usado no reset
  protected produtoSelecionado!: Produto;

  protected readonly produtoModel = signal<Produto>({
    nome: '',
    descricao: '',
    preco: 0,
    estoque: 0,
  });

  protected readonly produtoForm = form(this.produtoModel, (schema) => {
    required(schema.nome, { message: 'Um nome é necessário' });
    required(schema.descricao, { message: 'Descrição é obrigatória' });
    required(schema.preco, { message: 'Preço é obrigatório' });
    required(schema.estoque, { message: 'Estoque é obrigatório' });
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.buscarPorId(id).subscribe({
        next: (produto) => {
          this.produtoSelecionado = produto;
          this.produtoModel.set({ ...produto });
        },
      });
    }
  }

  atualizarEdicao(): void {
    this.editando.update((atual) => !atual);
    if (!this.editando()) {
      this.resetar();
    }
  }

  atualizarProduto(event: Event): void {
    event.preventDefault();

    submit(this.produtoForm, async () => {
      const produtoAtualizado: Produto = { ...this.produtoModel() };

      this.produtoService.atualizar(produtoAtualizado).subscribe({
        next: () => {
          this.editando.set(false);
          this.router.navigate(['/produtos']);
        },
      });
    });
  }

  resetar(): void {
    this.produtoForm().reset();
    this.produtoModel.set({ ...this.produtoSelecionado });
  }
}