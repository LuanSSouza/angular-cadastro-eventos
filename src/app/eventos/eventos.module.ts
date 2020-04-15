import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// FullCalendar Modules
import { FullCalendarModule } from '@fullcalendar/angular';

// Application Modules
import { EventosRoutingModule } from './eventos-routing.module';

// Components
import { FormularioEventoComponent } from './formulario-evento/formulario-evento.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { CalendarioEventoComponent } from './calendario-evento/calendario-evento.component';
import { EventosComponent } from './eventos/eventos.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FormularioConvitesComponent } from './formulario-convites/formulario-convites.component';
import { ListaConvitesComponent } from './lista-convites/lista-convites.component';

@NgModule({
  declarations: [
    FormularioEventoComponent,
    ListarEventoComponent, 
    CalendarioEventoComponent, 
    EventosComponent,
    HeaderComponent,
    FormularioConvitesComponent,
    ListaConvitesComponent
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
