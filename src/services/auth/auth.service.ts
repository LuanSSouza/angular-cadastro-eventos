import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService, private http: HttpClient, private router: Router) { }

  public login = async (user: any): Promise<boolean> => {
    let res: any = await this.http.post<any>(`${environment.apicalendario}/usuario/autenticar`, user, this.generateHeaders()).toPromise().catch(err => err );
    if (res.token) {
      this.cookieService.set('token', res.token);
      return true;
    }
    return false;
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
