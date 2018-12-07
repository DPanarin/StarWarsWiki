import { TestBed } from '@angular/core/testing';

import { CategoryResolveService } from './category-resolve.service';

describe('CategoryResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryResolveService = TestBed.get(CategoryResolveService);
    expect(service).toBeTruthy();
  });
});
