import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'inicio', 'fim'];
  dataSource =  [
    { codigo: 1, descricao: 'Evento 1', inicio: '2020-04-11', fim: '2020-04-11' },
    { codigo: 2, descricao: 'Evento 2', inicio: '2020-04-11', fim: '2020-04-11' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
