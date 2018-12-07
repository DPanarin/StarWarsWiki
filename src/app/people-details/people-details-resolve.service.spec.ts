import { TestBed } from '@angular/core/testing';
import { PeopleDetailsResolveService } from './people-details-resolve.service';



describe('PeopleDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleDetailsResolveService = TestBed.get(PeopleDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
