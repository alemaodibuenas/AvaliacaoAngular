import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component'; 
import {MatCardModule} from '@angular/material/card';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component'; 
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UsuarioReadComponent,
    UsuarioCreateComponent,
    UsuarioDeleteComponent,
    UsuarioUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
