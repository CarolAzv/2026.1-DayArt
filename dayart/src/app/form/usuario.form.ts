import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Usuario } from app.model.ts;

@Component({
    selector: 'usuarioForm',
    standalone: true,
    imports: [FormField],
    templateUrl: 'html/usuarioForm.html'
})

export class UsuarioFormComponent {
    usuarioData = signal<Usuario>({
        name: '',
        email: '',
        celular: null,
        localizacao:{
            estado: '',
            cidade: '',
            rua: '',
            numero: '',
        }
    });

    usuarioForm = form(this.usuarioData);
}