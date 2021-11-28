import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import CepDto from '../../../dto/CepDto';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { BuscarCepService } from './buscar-cep.service';

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

  constructor(private service: UsuarioService, private busca: BuscarCepService, private router: Router) { }

  dto: CepDto = new CepDto();
  dados: CepDto = new CepDto();

  @Input() nome: string = "";
  @Input() idade: string = "";
  @Input() cep: string = "";
  @Input() numero: string = "";

  ngOnInit(): void {
  }

  create(): void {

    this.usuario.nome = this.nome;
    this.usuario.idade = this.idade;
    this.usuario.cep = this.cep;
    this.usuario.estado= this.dados.uf;
    this.usuario.cidade= this.dados.localidade;
    this.usuario.logradouro= this.dados.logradouro;
    this.usuario.bairro= this.dados.bairro;
    this.usuario.numero= this.numero;

    this.service.create(this.usuario).subscribe((resposta) => {
      this.router.navigate(['usuarios'])
      this.service.mensagem('Usuario criado com sucesso!');
      console.log(resposta);
    })
  }

  buscarCep(): void{
    this.busca.buscarCep(this.cep)
    .subscribe(dto => {
        this.dados = dto;
    });
  }

  cancelar(): void {
    this.router.navigate(['usuarios'])
  }

}
