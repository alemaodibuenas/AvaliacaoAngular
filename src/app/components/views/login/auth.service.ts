import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioSenha } from './usuarioSenha';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutentificado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  fecharMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuarioSenha: UsuarioSenha) {

    if(usuarioSenha.nome === 'teste' && usuarioSenha.senha === '123'){
      this.usuarioAutentificado = true;
      this.router.navigate(['']);
      this.mostrarMenuEmitter.emit(true);
      this.fecharMenuEmitter.emit(false);
    } else {
      this.usuarioAutentificado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }
}
