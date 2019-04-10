import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCondominosComponent } from './lista-condominos.component';

describe('ListaCondominosComponent', () => {
  let component: ListaCondominosComponent;
  let fixture: ComponentFixture<ListaCondominosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCondominosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCondominosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
