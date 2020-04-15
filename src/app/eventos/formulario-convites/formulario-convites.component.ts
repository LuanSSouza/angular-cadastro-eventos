import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/services/usuario/usuario.service';
import { EventosService } from 'src/services/eventos/eventos.service';
import { ConviteService } from 'src/services/convite/convite.service';
import { Evento } from 'src/models/evento/evento.model';
import { Usuario } from 'src/models/usuario/usuario.model';
import { Convite } from 'src/models/convite/convite.model';

@Component({
  selector: 'app-formulario-convites',
  templateUrl: './formulario-convites.component.html',
  styleUrls: ['./formulario-convites.component.css']
})
export class FormularioConvitesComponent implements OnInit {
  public conviteForm: FormGroup;
  public eventos: Evento[] = [];
  public usuarios: Usuario[] = [];

  constructor(private conviteService: ConviteService,
    private eventosService: EventosService, 
    private usuarioService: UsuarioService,
    private location: Location) { }

  async ngOnInit(): Promise<void> {
    this.conviteForm = new FormGroup({
      evento: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
    });
    this.eventos = await this.eventosService.getEventos();
    this.usuarios = await this.usuarioService.getAll();
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.conviteForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }
  
  public submitLogin = (conviteFormValue) => {
    if (this.conviteForm.valid) {
      this.executeAdicionarCreation(conviteFormValue);
    }
  }
 
  private executeAdicionarCreation = (form) => {
    let convite: Convite = {
      keys: { 
        evento: form.evento,
        usuario: form.usuario,
      },
      status: { id: 1, status: "" }
    }
    this.conviteService.postConvite(convite);
  }
}
