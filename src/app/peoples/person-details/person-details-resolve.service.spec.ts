import { TestBed } from '@angular/core/testing';

import { PersonDetailsResolveService } from './person-details-resolve.service';

describe('PersonDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonDetailsResolveService = TestBed.get(PersonDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
