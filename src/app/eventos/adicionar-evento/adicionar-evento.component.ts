import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-evento',
  templateUrl: './adicionar-evento.component.html',
  styleUrls: ['./adicionar-evento.component.css']
})
export class AdicionarEventoComponent implements OnInit {

  public adicionarForm: FormGroup;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.adicionarForm = new FormGroup({
      codigo: new FormControl('', [Validators.required, Validators.maxLength(9)]),
      descricao: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      dataInicio: new FormControl(new Date()),
      horaInicio: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      dataTermino: new FormControl(new Date()),
      horaTermino: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.adicionarForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }
  
  public createAdicionar = (adicionarFormValue) => {
    if (this.adicionarForm.valid) {
      this.executeAdicionarCreation(adicionarFormValue);
    }
  }
 
  private executeAdicionarCreation = (adicionarFormValue) => {
  }
 

}
