import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'

// FullCalendar Modules
import { FullCalendarModule } from '@fullcalendar/angular';

// Application Modules
import { EventosRoutingModule } from './eventos-routing.module';
import { MaterialModule } from '../material/material.module';

// Components
import { AdicionarEventoComponent } from './adicionar-evento/adicionar-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { RemoverEventoComponent } from './remover-evento/remover-evento.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { CalendarioEventoComponent } from './calendario-evento/calendario-evento.component';
import { EventosComponent } from './eventos/eventos.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

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
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
