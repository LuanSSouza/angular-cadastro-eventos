import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth/auth.service';
import { UsuarioService } from 'src/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private authService: AuthService, private usuarioService: UsuarioService) { }

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

  public cadastrar = (loginFormValue) => {
    if (this.loginForm.valid) {
      let user: any = {
        login: loginFormValue.username,
        newPassword: loginFormValue.password
      }
      this.usuarioService.criarUsuario(user);
    }
  }
 
  private executeAdicionarCreation = (loginFormValue) => {
    let user: any = {
      username: loginFormValue.username,
      password: loginFormValue.password
    }
    this.authService.login(user);
  }
}
