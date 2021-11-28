import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Usuario[]> {
    const url = `${this.baseUrl}/usuarios`
    return this.http.get<Usuario[]>(url)
  }

  findById(id: String): Observable<Usuario> {
    const url = `${this.baseUrl}/usuarios/${id}`
    return this.http.get<Usuario>(url)
  }

  create(usuario: Usuario): Observable<Usuario>{
    const url = `${this.baseUrl}/usuarios`
    return this.http.post<Usuario>(url, usuario);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/usuarios/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, `OK`, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
