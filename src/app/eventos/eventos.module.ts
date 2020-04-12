import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


// Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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

@NgModule({
  declarations: [
    AdicionarEventoComponent, 
    EditarEventoComponent, 
    RemoverEventoComponent, 
    ListarEventoComponent, 
    CalendarioEventoComponent, 
    EventosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FullCalendarModule,
    FlexLayoutModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
