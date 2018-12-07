import { TestBed } from '@angular/core/testing';

import { FilmDetailsResolveService } from './film-details-resolve.service';

describe('FilmDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmDetailsResolveService = TestBed.get(FilmDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
