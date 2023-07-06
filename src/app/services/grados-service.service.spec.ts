import { TestBed } from '@angular/core/testing';

import { GradosServiceService } from './grados-service.service';

describe('GradosServiceService', () => {
  let service: GradosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
