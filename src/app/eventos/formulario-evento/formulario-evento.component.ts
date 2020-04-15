import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventosService } from 'src/services/eventos/eventos.service';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/models/evento/evento.model';

@Component({
  selector: 'app-formulario-evento',
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.css']
})
export class FormularioEventoComponent implements OnInit {

  public formularioForm: FormGroup;
  public isEdit: boolean = false;
  public evento: Evento = new Evento();

  constructor(private eventosService: EventosService, private location: Location, private route: ActivatedRoute) {
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

    if (this.isEdit == true) await this.eventosService.putEvento(this.evento);
    else await this.eventosService.postEvento(this.evento);
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

}
