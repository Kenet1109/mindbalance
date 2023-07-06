import { TestBed } from '@angular/core/testing';

import { ProfesoresServiceService } from './profesores-service.service';

describe('ProfesoresServiceService', () => {
  let service: ProfesoresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesoresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
