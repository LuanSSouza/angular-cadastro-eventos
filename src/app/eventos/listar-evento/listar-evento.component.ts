import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventosService } from 'src/services/eventos/eventos.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/dialog/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { Evento } from 'src/models/evento/evento.model';
import { EventoDialogComponent } from 'src/app/shared/dialog/evento-dialog/evento-dialog.component';
import { MessageDialogComponent, MessageDialogModel } from 'src/app/shared/dialog/message-dialog/message-dialog.component';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'inicio', 'termino', 'acoes'];
  dataSource = new MatTableDataSource<Evento>();
  dados: boolean = true;

  constructor(private eventosService: EventosService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.fillTable();
  }

  private fillTable = () => {
    this.eventosService.getUsuarioEventos().then(eventos => {
      eventos.sort((a,b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime());
      this.dataSource.data = eventos;
    }).catch(() => this.dados = false);
  }
  
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  editarEvento = (evento) => {
    this.router.navigate(['/eventos/editar', evento.codigo]);
  }

  visualizarEvento = (evento: Evento) => {
    this.dialog.open(EventoDialogComponent, {
      maxWidth: "600px",
      data: evento
    });
  }

  deletarEvento = async (evento: Evento) => {
    const message = evento.descricao;

    const dialogData = new ConfirmDialogModel("Você realmente deseja remover este evento?", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      data: dialogData
    });

    let excluir = await dialogRef.afterClosed().toPromise();
    if (excluir) {
      this.eventosService.deleteEvento(evento.codigo)
        .then(() => {
          this.openDialog('Sucesso!', 'Evento excluído.');
          this.fillTable();
        }).catch(() => this.openDialog('Erro!', 'Algo deu errado.'));
    }
  }

  openDialog(title: string, message: string) {
    this.dialog.open(MessageDialogComponent, {
      maxWidth: "600px",
      data: new MessageDialogModel(title, message)
    });
  }
}
