import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventosService } from 'src/services/eventos/eventos.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/dialog/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { Evento } from 'src/models/evento/evento.model';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'inicio', 'termino', 'acoes'];
  dataSource = new MatTableDataSource<any>();

  constructor(private eventosService: EventosService, public dialog: MatDialog, private router: Router) { }

  async ngOnInit(): Promise<void> {
    let eventos:Evento[] = await this.eventosService.getEventos();  
    eventos.sort((a,b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime());
    this.dataSource.data = eventos;
  }
  
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  editarEvento = (evento) => {
    this.router.navigate(['/eventos/editar', evento.codigo]);
  }

  deletarEvento = async (evento) =>{
    const message = evento.descricao;

    const dialogData = new ConfirmDialogModel("Você realmente deseja remover este evento?", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      data: dialogData
    });

    let excluir = await dialogRef.afterClosed().toPromise();
    if (excluir) {
      this.eventosService.deleteEvento(evento.codigo);
      this.dataSource.data = await this.eventosService.getEventos();
    }
  }
}
