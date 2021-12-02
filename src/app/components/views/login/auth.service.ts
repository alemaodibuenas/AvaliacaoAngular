import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioSenha } from './usuarioSenha';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutentificado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuarioSenha: UsuarioSenha) {

    if(usuarioSenha.nome === 'usuario@email.com' && usuarioSenha.senha === '123456'){
      this.usuarioAutentificado = true;
      this.router.navigate(['']);
      this.mostrarMenuEmitter.emit(true);
    } else {
      this.usuarioAutentificado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }
}
