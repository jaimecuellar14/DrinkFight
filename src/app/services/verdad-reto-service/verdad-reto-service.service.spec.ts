import { TestBed } from '@angular/core/testing';

import { VerdadRetoServiceService } from './verdad-reto-service.service';

describe('VerdadRetoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerdadRetoServiceService = TestBed.get(VerdadRetoServiceService);
    expect(service).toBeTruthy();
  });
});
