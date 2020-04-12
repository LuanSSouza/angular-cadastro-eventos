import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  public getEventos = () => this.http.get(`${environment.apicalendario}/eventos`);

  public deleteEvento = (id: number) => this.http.delete(`${environment.apicalendario}/eventos/${id}`);

  public postEvento = (evento: any) =>  {
    return this.http.post(`${environment.apicalendario}/eventos`, evento, this.generateHeaders());
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
}
