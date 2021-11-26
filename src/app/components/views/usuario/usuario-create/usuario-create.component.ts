import { Component, OnInit } from '@angular/core';
import CepDto from '../../../dto/CepDto';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

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

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.usuario).subscribe((resposta) => {
      console.log(resposta);
    })
  }

}
