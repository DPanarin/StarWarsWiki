import { TestBed } from '@angular/core/testing';

import { StarshipDetailsResolveService } from './starship-details-resolve.service';

describe('StarshipDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarshipDetailsResolveService = TestBed.get(StarshipDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
