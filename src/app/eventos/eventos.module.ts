import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules
import { MatTableModule } from '@angular/material/table';

// FullCalendar Modules
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatCardModule } from '@angular/material/card';

// Application Modules
import { EventosRoutingModule } from './eventos-routing.module';

// Components
import { AdicionarEventoComponent } from './adicionar-evento/adicionar-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { RemoverEventoComponent } from './remover-evento/remover-evento.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { CalendarioEventoComponent } from './calendario-evento/calendario-evento.component';
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
    FullCalendarModule,
    MatTableModule,
    MatCardModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
