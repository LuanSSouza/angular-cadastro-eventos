import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioEventoComponent } from './calendario-evento.component';

describe('CalendarioEventoComponent', () => {
  let component: CalendarioEventoComponent;
  let fixture: ComponentFixture<CalendarioEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
