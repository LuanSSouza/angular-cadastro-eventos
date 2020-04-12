import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'inicio', 'fim'];
  dataSource = new MatTableDataSource<any>(); 
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = [
      { codigo: 1, descricao: 'Evento 1', inicio: '2020-04-11', fim: '2020-04-11' },
      { codigo: 2, descricao: 'Evento 2', inicio: '2020-04-11', fim: '2020-04-11' }
    ];  
  }

  
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
