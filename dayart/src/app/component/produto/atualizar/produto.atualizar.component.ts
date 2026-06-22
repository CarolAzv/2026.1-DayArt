import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormField, form, required, submit } from '@angular/forms/signals';
import { ProdutoService } from '../../../service/produto.service';
import { Produto } from '../../../app.model';

@Component({
  standalone: true,
  selector: 'app-produto-atualizar',
  imports: [ButtonModule, FormField],
  templateUrl: './produto.atualizar.html',
  styleUrl: './produto.atualizar.css',
})


export class ProdutoAtualizarComponent implements OnInit { // ← typo corrigido
  private readonly produtoService = inject(ProdutoService);
  protected readonly editando = signal(false);

  @Input() produtos!: WritableSignal<Produto[]>;
  @Input() produtoSelecionado!: Produto;
  @Input() index!: number;

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
    this.produtoModel.set({ ...this.produtoSelecionado });
  }

  alternarEdicao(): void {
    this.editando.update((atual) => !atual);
    if (!this.editando()) {
      this.resetar(); // ao fechar, restaura dados originais
    }
  }

  alterarProduto(event: Event): void {
    event.preventDefault();

    submit(this.produtoForm, async () => {
      const produtoAtualizado: Produto = { ...this.produtoModel() };

      this.produtoService.atualizar(produtoAtualizado);

      this.produtos.update((lista) => {
        const atualizada = [...lista];
        atualizada[this.index] = produtoAtualizado;
        return atualizada;
      });

      this.editando.set(false);
      this.resetar();
    });
  }

  resetar(): void {
    this.produtoForm().reset();
    this.produtoModel.set({ ...this.produtoSelecionado });
  }
}