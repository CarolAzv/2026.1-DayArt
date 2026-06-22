import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormField, submit } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';
import { ProdutoService } from '../../../service/produto.service';
import { CriarProdutoForm } from '../../../form/produto.form';


@Component({
    standalone: true,
    selector: 'app-produto-salvar',
    imports: [ButtonModule, FormField],
    templateUrl: './produto.salvar.html',
    styleUrl: './produto.salvar.css',
})  


export class ProdutoSalvarComponent{
    private readonly produtoService = inject(ProdutoService);
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);

    protected formState = CriarProdutoForm();

    mensagem = signal<string | null>(null);

    ngOnInit(): void {
        const nome = this.route.snapshot.queryParamMap.get('nome');
        if (nome) {
            const encontrado = this.produtoService.listar().find((u) => u.nome === nome);

            if (encontrado) {
                this.formState = CriarProdutoForm(encontrado);
            }
        }
    }

    salvar(): void {
        const { produtoForm, produtoData } = this.formState;

        submit(produtoForm, async () => {
            this.mensagem.set(null);
            const produto = produtoData();
            const eEdicao = this.route.snapshot.queryParamMap.has('nome');

            if (eEdicao) {
                this.produtoService.atualizar(produto);
            } else {
                this.produtoService.incluir(produto);
            }

            this.router.navigate(['/produtos']);
        });
    }

    cancelar(): void {
        this.router.navigate(['/produtos']);
    }
}