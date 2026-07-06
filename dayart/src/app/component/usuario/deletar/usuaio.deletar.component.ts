import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UsuarioService } from '../../../service/usuario.service';
import { Usuario } from '../../../app.model';
import { inject } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-usuario-deletar',
    imports: [ButtonModule],
    templateUrl: './usuario.deletar.html',
    styleUrl: './usuario.deletar.css',
})


export class UsuarioDeletarComponent {
    private readonly usuarioService = inject(UsuarioService);
    readonly usuario = input.required<Usuario>();
    readonly deletar = output<Usuario>();

    deletarUsuario(): void {
        const usuario = this.usuario();

        if (!confirm('Deseja remover este usuário?')) return;

        this.usuarioService.deletar(usuario);
        this.deletar.emit(usuario);
    }
}