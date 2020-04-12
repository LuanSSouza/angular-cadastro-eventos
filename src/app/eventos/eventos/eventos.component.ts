import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  
  isAction = true;
  navLinks = [
    { path: '/eventos/calendario', label: 'Calendário' },
    { path: '/eventos', label: 'Lista' },
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
