import { Component } from '@angular/core';
import { AuthService } from './components/views/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app-component.html'
})
export class AppComponent {
  title = 'tasklist';

  mostrarMenu: boolean = false;

  fecharMenu: boolean = true;

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar      
    );
    this.authService.fecharMenuEmitter.subscribe(
      fechar => this.fecharMenu = fechar
     );

  }
}
