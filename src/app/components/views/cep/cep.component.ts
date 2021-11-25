import { Component, OnInit, Input } from '@angular/core';
import { BuscarCepService } from '../buscar-cep/buscar-cep.service';
import CepDto from "../../dto/CepDto";

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nomeComponentePai: string = "";
  public sobrenomeComponentePai: string = "";
  public cep: string = "";

}
