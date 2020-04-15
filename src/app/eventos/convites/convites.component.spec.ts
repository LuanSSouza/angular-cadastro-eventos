import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvitesComponent } from './convites.component';

describe('ConvitesComponent', () => {
  let component: ConvitesComponent;
  let fixture: ComponentFixture<ConvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
