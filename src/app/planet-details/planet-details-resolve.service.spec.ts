import { TestBed } from '@angular/core/testing';

import { PlanetDetailsResolveService } from './planet-details-resolve.service';

describe('PlanetDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetDetailsResolveService = TestBed.get(PlanetDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
