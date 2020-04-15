import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConvitesComponent } from './formulario-convites.component';

describe('FormularioConvitesComponent', () => {
  let component: FormularioConvitesComponent;
  let fixture: ComponentFixture<FormularioConvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioConvitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioConvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
