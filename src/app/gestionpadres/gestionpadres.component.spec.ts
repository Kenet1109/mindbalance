import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionpadresComponent } from './gestionpadres.component';

describe('GestionpadresComponent', () => {
  let component: GestionpadresComponent;
  let fixture: ComponentFixture<GestionpadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionpadresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionpadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
