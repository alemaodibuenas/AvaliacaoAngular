import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

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

  constructor(private router: Router, private service: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.usuario.id!).subscribe((resposta) => {
      this.usuario.nome = resposta.nome;
      this.usuario.idade = resposta.idade;
      this.usuario.cep = resposta.cep;
      this.usuario.estado= resposta.estado;
      this.usuario.cidade= resposta.cidade;
      this.usuario.logradouro= resposta.logradouro;
      this.usuario.bairro= resposta.bairro;
      this.usuario.numero= resposta.numero;
    })
  }

  update(): void {
    this.service.update(this.usuario).subscribe((resposta) => {
      this.router.navigate(['usuarios']);
      this.service.mensagem('Usuario atualizado com sucesso!');
    })
  }

  cancel(): void {
    this.router.navigate(['usuarios'])
  }

}
