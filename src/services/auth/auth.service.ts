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
    this.http.post<any>(`${environment.apicalendario}/authenticate`, user, this.generateHeaders()).subscribe(res => { 
      this.cookieService.set( 'token', res.token );
      this.router.navigate(['/eventos']);
    });
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
}
