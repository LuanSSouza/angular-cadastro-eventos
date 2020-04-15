import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { Evento } from 'src/models/evento/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  public getEventos = () => {
    return this.http.get<Evento[]>(`${environment.apicalendario}/evento`, this.generateHeaders()).toPromise();
  }

  public getEventosByCodigo = (codigo: number) => {
    return this.http.get<Evento>(`${environment.apicalendario}/evento/${codigo}`, this.generateHeaders()).toPromise();
  }

  public postEvento = (evento: Evento) =>  {
    return this.http.post(`${environment.apicalendario}/evento`, evento, this.generateHeaders()).toPromise();
  }

  public putEvento = (evento: Evento) =>  {
    return this.http.put(`${environment.apicalendario}/evento`, evento, this.generateHeaders()).toPromise();
  }

  public deleteEvento = (id: number) => {
    return this.http.delete(`${environment.apicalendario}/evento/${id}`, this.generateHeaders()).toPromise();
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders(
      { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.authService.getToken()}`} )
    }
  }
}
