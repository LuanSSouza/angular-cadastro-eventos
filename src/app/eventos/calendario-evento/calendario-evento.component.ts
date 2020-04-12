import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptbrLocale from '@fullcalendar/core/locales/pt-br';

@Component({
  selector: 'app-calendario-evento',
  templateUrl: './calendario-evento.component.html',
  styleUrls: ['./calendario-evento.component.css']
})
export class CalendarioEventoComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  locales = [ptbrLocale];

  constructor() { }

  ngOnInit(): void {
  }

}
