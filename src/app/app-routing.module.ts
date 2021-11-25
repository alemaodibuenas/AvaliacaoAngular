import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepComponent } from './components/views/cep/cep.component';
import { HomeComponent } from './components/views/home/home.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'usuarios',
  component: UsuarioReadComponent
  },
  {
  path: 'cep',
  component: CepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
