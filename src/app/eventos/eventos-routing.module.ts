import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { CalendarioEventoComponent } from './calendario-evento/calendario-evento.component';
import { FormularioEventoComponent } from './formulario-evento/formulario-evento.component';
import { FormularioConvitesComponent } from './formulario-convites/formulario-convites.component';
import { ListaConvitesComponent } from './lista-convites/lista-convites.component';


const routes: Routes = [
  { 
    path: 'eventos',  
    component: EventosComponent, 
    children: [
      { path: '', component: ListarEventoComponent },
      { path: 'adicionar', component: FormularioEventoComponent },
      { path: 'calendario', component: CalendarioEventoComponent },
      { path: 'editar/:codigo', component: FormularioEventoComponent },
      { path: 'adicionar-convite', component: FormularioConvitesComponent },
      { path: 'lista-convites', component: ListaConvitesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
