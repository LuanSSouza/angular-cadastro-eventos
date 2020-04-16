import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/dialog/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { ConviteService } from 'src/services/convite/convite.service';
import { Convite } from 'src/models/convite/convite.model';
import { MessageDialogComponent, MessageDialogModel } from 'src/app/shared/dialog/message-dialog/message-dialog.component';

@Component({
  selector: 'app-lista-convites',
  templateUrl: './lista-convites.component.html',
  styleUrls: ['./lista-convites.component.css']
})
export class ListaConvitesComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'inicio', 'termino', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Convite>();
  dados: boolean = true;

  constructor(private conviteService: ConviteService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.fillTable();
  }

  private fillTable = () => {
    this.conviteService.getConvites().then(convites => {
      convites.sort((a, b) => new Date(a.keys.evento.inicio).getTime() - new Date(b.keys.evento.inicio).getTime());
      this.dataSource.data = convites;
    }).catch(() => this.dados = false);
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  editarConvite = async (convite: Convite) => {
    const message = convite.keys.evento.descricao;

    const dialogData = new ConfirmDialogModel("Você participará do evento?", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      data: dialogData
    });

    let aceito = await dialogRef.afterClosed().toPromise();
    
    if (aceito) convite.status = { id: 2, status: "Aceito" }; 
    else convite.status = { id: 3, status: "Recusado" };

    this.conviteService.putConvite(convite)
        .then(() => {
          this.openDialog('Sucesso!', 'Convite respondido.');
          this.fillTable();
        }).catch(() => this.openDialog('Erro!', 'Algo deu errado.'));
  }

  openDialog(title: string, message: string) {
    this.dialog.open(MessageDialogComponent, {
      maxWidth: "600px",
      data: new MessageDialogModel(title, message)
    });
  }
}
