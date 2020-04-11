import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptbrLocale from '@fullcalendar/core/locales/pt-br';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!
  locales = [ptbrLocale];

  constructor() { }

  ngOnInit(): void {
  }

}
