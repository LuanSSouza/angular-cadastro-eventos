import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvitesRecebidosComponent } from './convites-recebidos/convites-recebidos.component';
import { ConvitesEnviadosComponent } from './convites-enviados/convites-enviados.component';
import { ConvitesComponent } from './convites.component';



@NgModule({
  declarations: [ConvitesRecebidosComponent, ConvitesEnviadosComponent, ConvitesComponent],
  imports: [
    CommonModule
  ]
})
export class ConvitesModule { }
