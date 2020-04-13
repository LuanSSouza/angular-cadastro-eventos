import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService, private http: HttpClient, private router: Router) { }

  public login = async (user: any) => {
    let res: any = await this.http.post<any>(`${environment.apicalendario}/authenticate`, user, this.generateHeaders()).toPromise().catch(err => err );
    if (res.status == 403) return "Usuário e/ou senha inválido(s)!";
    this.cookieService.set('token', res.token);
    this.router.navigate(['/eventos']);
  }

  public logout = () => {
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }

  public isLogged = () => this.cookieService.check('token');
  
  public getToken = () => this.cookieService.get('token');

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
}
