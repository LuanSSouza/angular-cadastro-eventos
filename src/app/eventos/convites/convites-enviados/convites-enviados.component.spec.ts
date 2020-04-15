import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvitesEnviadosComponent } from './convites-enviados.component';

describe('ConvitesEnviadosComponent', () => {
  let component: ConvitesEnviadosComponent;
  let fixture: ComponentFixture<ConvitesEnviadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvitesEnviadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvitesEnviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
