import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarEventoComponent } from './adicionar-evento/adicionar-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { RemoverEventoComponent } from './remover-evento/remover-evento.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { CalendarioEventoComponent } from './calendario-evento/calendario-evento.component';



@NgModule({
  declarations: [AdicionarEventoComponent, EditarEventoComponent, RemoverEventoComponent, ListarEventoComponent, CalendarioEventoComponent],
  imports: [
    CommonModule
  ]
})
export class EventosModule { }
