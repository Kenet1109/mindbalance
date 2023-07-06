import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionestudiantesComponent } from './gestionestudiantes.component';

describe('GestionestudiantesComponent', () => {
  let component: GestionestudiantesComponent;
  let fixture: ComponentFixture<GestionestudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionestudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
