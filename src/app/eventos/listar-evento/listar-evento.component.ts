import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventosService } from 'src/services/eventos/eventos.service';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'inicio', 'termino', 'acoes'];
  dataSource = new MatTableDataSource<any>();

  constructor(private eventosService: EventosService) { }

  async ngOnInit(): Promise<void> {
    this.dataSource.data = await this.eventosService.getEventos();  
  }

  
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
