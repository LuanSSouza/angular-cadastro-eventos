import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendarioeventos';
  constructor(private authService: AuthService) {
    if (!this.authService.isLogged()) this.authService.logout(); 
  }
}
