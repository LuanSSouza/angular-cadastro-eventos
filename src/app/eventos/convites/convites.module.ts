import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvitesRecebidosComponent } from './convites-recebidos/convites-recebidos.component';
import { ConvitesEnviadosComponent } from './convites-enviados/convites-enviados.component';



@NgModule({
  declarations: [ConvitesRecebidosComponent, ConvitesEnviadosComponent],
  imports: [
    CommonModule
  ]
})
export class ConvitesModule { }
