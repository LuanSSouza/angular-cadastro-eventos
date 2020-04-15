import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { Usuario } from 'src/models/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  public criarUsuario = (user) => {
    return this.http.post<any>(`${environment.apicalendario}/usuario/criar`, user, this.generateHeaders()).toPromise();
  }

  public getAll = () => {
    return this.http.get<Usuario[]>(`${environment.apicalendario}/usuario/all`, this.generateHeaders()).toPromise();
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders(
      { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.authService.getToken()}`} )
    }
  }
}
