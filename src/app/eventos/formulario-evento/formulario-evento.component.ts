import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventosService } from 'src/services/eventos/eventos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/models/evento/evento.model';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent, MessageDialogModel } from 'src/app/shared/dialog/message-dialog/message-dialog.component';

@Component({
  selector: 'app-formulario-evento',
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.css']
})
export class FormularioEventoComponent implements OnInit {

  public formularioForm: FormGroup;
  public isEdit: boolean = false;
  public evento: Evento = new Evento();

  constructor(private eventosService: EventosService, 
    private location: Location, 
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,) {
    this.route.params.subscribe( params => {
      if (params["codigo"]) this.getEvento(params["codigo"]);
    }); 
  }

  ngOnInit(): void {
    this.formularioForm = new FormGroup({
      descricao: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      inicio: new FormControl('', [Validators.required]),
      termino: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.formularioForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }
  
  public onSubmitEvento = (form) => {
    if (this.formularioForm.valid) {
      this.fillEvento(form);
    }
  }
 
  private fillEvento = async (form) => {
    this.evento.descricao = form.descricao;
    this.evento.inicio = form.inicio;
    this.evento.termino = form.termino;

    if (this.isEdit){
      this.eventosService.putEvento(this.evento)
        .then(() => {
          this.openDialog('Sucesso!', 'Evento atualizado.');
          this.router.navigate(['/eventos']);
        }).catch(() => this.openDialog('Erro!', 'Algo deu errado.'))
    }
    else {
      this.eventosService.postEvento(this.evento)
        .then(() => {
          this.openDialog('Sucesso!', 'Evento cadastrado.');
          this.router.navigate(['/eventos']);
        }).catch(() => this.openDialog('Erro!', 'Algo deu errado.'));
    }
  }
  
  private getEvento = async (codigo: number) => {
    this.evento = await this.eventosService.getEventosByCodigo(codigo);
    this.formularioForm.setValue({
      descricao: this.evento.descricao,
      inicio: this.evento.inicio,
      termino: this.evento.termino,
    });
    this.isEdit = true;
  }

  openDialog(title: string, message: string) {
    this.dialog.open(MessageDialogComponent, {
      maxWidth: "600px",
      data: new MessageDialogModel(title, message)
    });
  }
}
