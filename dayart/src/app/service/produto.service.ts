import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/produtos';

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  buscarPorId(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  incluir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  atualizar(produto: Produto): Observable<Produto> {
    const id = produto.id ?? produto.nome;
    return this.http.put<Produto>(`${this.apiUrl}/${encodeURIComponent(String(id))}`, produto);
  }

  deletar(produto: Produto): Observable<void> {
    const id = produto.id ?? produto.nome;
    return this.http.delete<void>(`${this.apiUrl}/${encodeURIComponent(String(id))}`);
  }
}