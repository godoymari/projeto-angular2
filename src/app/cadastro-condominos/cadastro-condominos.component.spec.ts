import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCondominosComponent } from './cadastro-condominos.component';

describe('CadastroCondominosComponent', () => {
  let component: CadastroCondominosComponent;
  let fixture: ComponentFixture<CadastroCondominosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCondominosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCondominosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
