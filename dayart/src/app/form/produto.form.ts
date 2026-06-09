import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Produto } from app.model.ts;

@Component({
    selector: 'produtoForm',
    standalone: true,
    imports: [FormField],
    templateUrl: 'html/produtoForm.html'
})

export class ProdutoFormComponent {
    produtoData = signal<Produto>({
        nome: '',
        estoque: null,
    });

    produtoForm = form(this.produtoData);
}