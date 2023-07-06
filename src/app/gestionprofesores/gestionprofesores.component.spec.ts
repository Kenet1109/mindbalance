import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprofesoresComponent } from './gestionprofesores.component';

describe('GestionprofesoresComponent', () => {
  let component: GestionprofesoresComponent;
  let fixture: ComponentFixture<GestionprofesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionprofesoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionprofesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
