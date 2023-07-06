import { TestBed } from '@angular/core/testing';

import { PadresServiceService } from './padres-service.service';

describe('PadresServiceService', () => {
  let service: PadresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
