import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInvernaderoComponent } from './agregar-invernadero.component';

describe('AgregarInvernaderoComponent', () => {
  let component: AgregarInvernaderoComponent;
  let fixture: ComponentFixture<AgregarInvernaderoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarInvernaderoComponent]
    });
    fixture = TestBed.createComponent(AgregarInvernaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
