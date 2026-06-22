import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProdutoService } from '../../../service/produto.service';
import { Produto } from '../../../app.model';
import { inject } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-produto-deletar',
    imports: [ButtonModule],
    templateUrl: './produto.deletar.html',
    styleUrl: './produto.deletar.css',
})


export class ProdutoDeletarComponent {
    private readonly produtoService = inject(ProdutoService);
    readonly produto = input.required<Produto>();
    readonly deletar = output<Produto>();

    deletarProduto(): void {
        const produto = this.produto();

        if (!confirm('Deseja remover este produto?')) return;

        this.produtoService.deletar(produto);
        this.deletar.emit(produto);
    }
}