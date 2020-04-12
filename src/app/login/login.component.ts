import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  
  public submitLogin = (loginFormValue) => {
    if (this.loginForm.valid) {
      this.executeAdicionarCreation(loginFormValue);
    }
  }
 
  private executeAdicionarCreation = (loginFormValue) => {

  }
}
