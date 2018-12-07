import { TestBed } from '@angular/core/testing';

import { HeaderMenuResolveService } from './header-menu-resolve.service';

describe('HeaderMenuResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderMenuResolveService = TestBed.get(HeaderMenuResolveService);
    expect(service).toBeTruthy();
  });
});
