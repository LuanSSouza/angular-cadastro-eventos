import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverEventoComponent } from './remover-evento.component';

describe('RemoverEventoComponent', () => {
  let component: RemoverEventoComponent;
  let fixture: ComponentFixture<RemoverEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
