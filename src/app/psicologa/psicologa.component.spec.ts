import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologaComponent } from './psicologa.component';

describe('PsicologaComponent', () => {
  let component: PsicologaComponent;
  let fixture: ComponentFixture<PsicologaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicologaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicologaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
