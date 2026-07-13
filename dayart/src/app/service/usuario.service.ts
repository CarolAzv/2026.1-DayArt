import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/usuarios';

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  incluir(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    const id = usuario.id ?? usuario.nome;
    return this.http.put<Usuario>(`${this.apiUrl}/${encodeURIComponent(String(id))}`, usuario);
  }

  deletar(usuario: Usuario): Observable<void> {
    const id = usuario.id ?? usuario.nome;
    return this.http.delete<void>(`${this.apiUrl}/${encodeURIComponent(String(id))}`);
  }
}