import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario: Usuario = {
    nome: "",
    idade: "",
    cep: "",
    estado: "",
    cidade: "",
    logradouro: "",
    bairro: "",
    numero: ""
  }

  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.usuario.id!).subscribe((resposta) => {
      this.usuario = resposta
      console.log(this.usuario);
    })
  }

  delete(): void {
    this.service.delete(this.usuario.id!).subscribe((resposta) => {
      this.router.navigate(['usuarios'])
      this.service.mensagem('Usuario deletado com sucesso!')
    })
  }

  cancel(): void {
    this.router.navigate(['usuarios'])
  }

}
