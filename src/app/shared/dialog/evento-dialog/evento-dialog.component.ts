import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Evento } from 'src/models/evento/evento.model';
import { Convite } from 'src/models/convite/convite.model';
import { ConviteService } from 'src/services/convite/convite.service';

@Component({
  selector: 'app-evento-dialog',
  templateUrl: './evento-dialog.component.html',
  styleUrls: ['./evento-dialog.component.css']
})
export class EventoDialogComponent implements OnInit {

  evento: Evento;
  convites: Convite[] = [];

  constructor(private conviteService: ConviteService,
    public dialogRef: MatDialogRef<EventoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Evento) {
    this.evento = data;
  }

  async ngOnInit(): Promise<void> {
    this.convites = await this.conviteService.getConvitesEvento(this.evento.codigo);
    this.convites.sort((a, b) => {
      if (a.keys.usuario.login > b.keys.usuario.login)
        return -1;
      if (b.keys.usuario.login > a.keys.usuario.login)
        return 1;
      return 0;
    });
  }

  onConfirm(): void {
    this.dialogRef.close();
  }
}
