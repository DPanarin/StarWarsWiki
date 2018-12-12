import { TestBed } from '@angular/core/testing';

import { PeopleListResolveService } from './people-list-resolve.service';

describe('PeopleListResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleListResolveService = TestBed.get(PeopleListResolveService);
    expect(service).toBeTruthy();
  });
});
