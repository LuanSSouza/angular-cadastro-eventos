import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// FullCalendar Modules
import { FullCalendarModule } from '@fullcalendar/angular';

// Application Modules
import { EventosRoutingModule } from './eventos-routing.module';

// Components
import { AdicionarEventoComponent } from './adicionar-evento/adicionar-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { RemoverEventoComponent } from './remover-evento/remover-evento.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { CalendarioEventoComponent } from './calendario-evento/calendario-evento.component';
import { EventosComponent } from './eventos/eventos.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdicionarEventoComponent, 
    EditarEventoComponent, 
    RemoverEventoComponent, 
    ListarEventoComponent, 
    CalendarioEventoComponent, 
    EventosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule,
    SharedModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
