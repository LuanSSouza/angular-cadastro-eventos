import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventosService } from 'src/services/eventos/eventos.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'inicio', 'termino', 'acoes'];
  dataSource = new MatTableDataSource<any>();

  constructor(private eventosService: EventosService, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.dataSource.data = await this.eventosService.getEventos();  
  }
  
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  deletarEvento(evento): void {
    const message = evento.descricao;

    const dialogData = new ConfirmDialogModel("Você realmente deseja remover este evento?", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
}
