import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionarEventoComponent } from './adicionar-evento/adicionar-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { RemoverEventoComponent } from './remover-evento/remover-evento.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { CalendarioEventoComponent } from './calendario-evento/calendario-evento.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { EventosRoutingModule } from './eventos-routing.module';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  declarations: [
    AdicionarEventoComponent, 
    EditarEventoComponent, 
    RemoverEventoComponent, 
    ListarEventoComponent, 
    CalendarioEventoComponent, EventosComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule, // for FullCalendar!,
    EventosRoutingModule
  ]
})
export class EventosModule { }
