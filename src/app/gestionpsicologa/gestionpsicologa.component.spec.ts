import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionpsicologaComponent } from './gestionpsicologa.component';

describe('GestionpsicologaComponent', () => {
  let component: GestionpsicologaComponent;
  let fixture: ComponentFixture<GestionpsicologaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionpsicologaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionpsicologaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
