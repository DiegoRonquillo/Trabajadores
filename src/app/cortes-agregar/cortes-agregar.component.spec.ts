import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortesAgregarComponent } from './cortes-agregar.component';

describe('CortesAgregarComponent', () => {
  let component: CortesAgregarComponent;
  let fixture: ComponentFixture<CortesAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CortesAgregarComponent]
    });
    fixture = TestBed.createComponent(CortesAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
