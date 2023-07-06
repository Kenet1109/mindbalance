import { TestBed } from '@angular/core/testing';

import { PsicologasServiceService } from './psicologas-service.service';

describe('PsicologasServiceService', () => {
  let service: PsicologasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsicologasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
