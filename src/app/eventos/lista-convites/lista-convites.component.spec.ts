import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConvitesComponent } from './lista-convites.component';

describe('ListaConvitesComponent', () => {
  let component: ListaConvitesComponent;
  let fixture: ComponentFixture<ListaConvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaConvitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
