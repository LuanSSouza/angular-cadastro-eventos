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
  eventos = [ {title: 'Evento1', start: "2020-04-11 20:00", end: "2020-04-12 02:00"},
              {title: 'Evento1', start: "2020-04-13 00:00", end: "2020-04-14 02:00"},
           ]

  constructor() { }

  ngOnInit(): void {
  }

}
