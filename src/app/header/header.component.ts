import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean;

  constructor(private auhtService: AuthService) { }

  ngOnInit(): void {
    this.isLogged = this.auhtService.isLogged();
  }

  loggout = () => this.auhtService.logout()

}
