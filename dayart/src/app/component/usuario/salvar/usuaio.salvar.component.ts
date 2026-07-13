import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormField, submit } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';
import { UsuarioService } from '../../../service/usuario.service';
import { CriarUsuarioForm } from '../../../form/usuario.form';

@Component({
    standalone: true,
    selector: 'app-salvar',
    imports: [ButtonModule],
    templateUrl: './usuario.salvar.html',
    styleUrl: './usuario.salvar.css',
})
export class UsuarioSalvarComponent implements OnInit {
    private readonly usuarioService = inject(UsuarioService);
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);

    protected formState = CriarUsuarioForm();

    mensagem = signal<string | null>(null);

    ngOnInit(): void {
        const nome = this.route.snapshot.queryParamMap.get('nome');
        if (nome) {
            this.usuarioService.listar().subscribe({
                next: (lista) => {
                    const encontrado = lista.find((usuario) => usuario.nome === nome);
                    if (encontrado) {
                        this.formState = CriarUsuarioForm(encontrado);
                    }
                },
            });
        }
    }

    salvar(): void {
        const { usuarioForm, usuarioData } = this.formState;

        submit(usuarioForm, async () => {
            this.mensagem.set(null);
            const usuario = usuarioData();
            const eEdicao = this.route.snapshot.queryParamMap.has('nome');

            if (eEdicao) {
                this.usuarioService.atualizar(usuario).subscribe({
                    next: () => this.router.navigate(['/users']),
                    error: () => this.mensagem.set('Não foi possível atualizar o usuário.'),
                });
            } else {
                this.usuarioService.incluir(usuario).subscribe({
                    next: () => this.router.navigate(['/users']),
                    error: () => this.mensagem.set('Não foi possível salvar o usuário.'),
                });
            }
        });
    }

    cancelar(): void {
        this.router.navigate(['/users']);
    }
}