import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private service: UsuarioService, private busca: BuscarCepService) { }

  dto: CepDto = new CepDto();
  dados: CepDto = new CepDto();

  @Input() nome: string = "";
  @Input() idade: string = "";
  @Input() cep: string = "";
  @Input() numero: string = "";

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.usuario).subscribe((resposta) => {
      this.usuario.nome = this.nome;
      this.usuario.estado = this.dados.logradouro;
      console.log(resposta);
    })
  }

  buscarCep(): void{
    this.busca.buscarCep(this.cep)
    .subscribe(dto => {
        this.dados = dto;
    });
  }

}
