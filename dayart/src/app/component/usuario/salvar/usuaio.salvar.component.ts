import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormField, submit } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';
import { UsuarioService } from '../../../service/usuario.service';
import { CriarUsuarioForm } from '../../../form/usuario.form';


@Component({
    standalone: true,
    selector: 'app-salvar',
    imports: [ButtonModule, FormField],
    templateUrl: './usuario.salvar.html',
    styleUrl: './usuario.salvar.css',
})  


export class UsuarioSalvarComponent{
    private readonly usuarioService = inject(UsuarioService);
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);

    protected formState = CriarUsuarioForm();

    mensagem = signal<string | null>(null);

    ngOnInit(): void {
        const nome = this.route.snapshot.queryParamMap.get('nome');
        if (nome) {
            const encontrado = this.usuarioService.listar().find((u) => u.nome === nome);

            if (encontrado) {
                this.formState = CriarUsuarioForm(encontrado);
            }
        }
    }

    salvar(): void {
        const { usuarioForm, usuarioData } = this.formState;

        submit(usuarioForm, async () => {
            this.mensagem.set(null);
            const usuario = usuarioData();
            const eEdicao = this.route.snapshot.queryParamMap.has('nome');

            if (eEdicao) {
                this.usuarioService.atualizar(usuario);
            } else {
                this.usuarioService.incluir(usuario);
            }

            this.router.navigate(['/users']);
        });
    }

    cancelar(): void {
        this.router.navigate(['/users']);
    }
}