import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregsrActividadComponent } from './agregsr-actividad.component';

describe('AgregsrActividadComponent', () => {
  let component: AgregsrActividadComponent;
  let fixture: ComponentFixture<AgregsrActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregsrActividadComponent]
    });
    fixture = TestBed.createComponent(AgregsrActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
