import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventosService } from 'src/services/eventos/eventos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-evento',
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.css']
})
export class FormularioEventoComponent implements OnInit {

  public formularioForm: FormGroup;

  constructor(private eventosService: EventosService, private location: Location, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      if (params["codigo"]) this.getEvento(params["codigo"]);
    }); 
  }

  ngOnInit(): void {
    this.formularioForm = new FormGroup({
      codigo: new FormControl('', [Validators.required, Validators.maxLength(9)]),
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
    let evento = { 
      codigo: form.codigo,
      descricao: form.descricao,
      inicio: form.inicio,
      termino: form.termino
    }
    
    let res = await this.eventosService.postEvento(evento);
  }
  
  private getEvento = async (codigo: number) => {
    let evento:any = await this.eventosService.getEventosByCodigo(codigo);
    this.formularioForm.setValue({
      codigo: evento.codigo,
      descricao: evento.descricao,
      inicio: evento.inicio,
      termino: evento.termino,
    });
  }

}
