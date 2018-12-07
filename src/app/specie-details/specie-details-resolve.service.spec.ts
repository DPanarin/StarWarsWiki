import { TestBed } from '@angular/core/testing';

import { SpecieDetailsResolveService } from './specie-details-resolve.service';

describe('SpecieDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecieDetailsResolveService = TestBed.get(SpecieDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
