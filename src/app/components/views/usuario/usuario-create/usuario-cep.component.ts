import { Component, OnInit, Input } from '@angular/core';
import CepDto from '../../dto/CepDto';
import { BuscarCepService } from './buscar-cep.service';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css']
})
export class UsuarioCepComponent implements OnInit {

  constructor(
    public service: BuscarCepService
  ) { }

  ngOnInit(): void {
  }

  dto: CepDto = new CepDto();
  dados: CepDto = new CepDto();


  @Input() cep: string = "";

  buscarCep(): void{
    this.service.buscarCep(this.cep)
    .subscribe(dto => {
        this.dados = dto;
    });
  }
}
