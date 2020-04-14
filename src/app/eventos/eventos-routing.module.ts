import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { AdicionarEventoComponent } from './adicionar-evento/adicionar-evento.component';
import { CalendarioEventoComponent } from './calendario-evento/calendario-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { RemoverEventoComponent } from './remover-evento/remover-evento.component';


const routes: Routes = [
  { 
    path: 'eventos',  
    component: EventosComponent, 
    children: [
      { path: '', component: ListarEventoComponent },
      { path: 'adicionar', component: AdicionarEventoComponent },
      { path: 'calendario', component: CalendarioEventoComponent },
      { path: 'editar/:codigo', component: AdicionarEventoComponent },
      { path: 'remover', component: RemoverEventoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
