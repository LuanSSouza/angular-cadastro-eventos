import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConviteService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  public getConvites = () => {
    return this.http.get<any[]>(`${environment.apicalendario}/convite`, this.generateHeaders()).toPromise();
  }

  public postConvite = (convite) =>  {
    return this.http.post(`${environment.apicalendario}/convite`, convite, this.generateHeaders()).toPromise();
  }

  public putConvite = (convite) =>  {
    return this.http.put(`${environment.apicalendario}/convite`, convite, this.generateHeaders()).toPromise();
  }

  public deleteConvite = (convite) => {
    return this.http.post(`${environment.apicalendario}/convite/deletar`, convite, this.generateHeaders()).toPromise();
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders(
      { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.authService.getToken()}`} )
    }
  }
}
