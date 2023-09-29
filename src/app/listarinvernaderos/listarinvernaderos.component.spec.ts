import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarinvernaderosComponent } from './listarinvernaderos.component';

describe('ListarinvernaderosComponent', () => {
  let component: ListarinvernaderosComponent;
  let fixture: ComponentFixture<ListarinvernaderosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarinvernaderosComponent]
    });
    fixture = TestBed.createComponent(ListarinvernaderosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
