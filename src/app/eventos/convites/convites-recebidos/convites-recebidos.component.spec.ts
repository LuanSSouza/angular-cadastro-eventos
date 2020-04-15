import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvitesRecebidosComponent } from './convites-recebidos.component';

describe('ConvitesRecebidosComponent', () => {
  let component: ConvitesRecebidosComponent;
  let fixture: ComponentFixture<ConvitesRecebidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvitesRecebidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvitesRecebidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
