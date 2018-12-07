import { TestBed } from '@angular/core/testing';

import { VehicleDetailsResolveService } from './vehicle-details-resolve.service';

describe('VehicleDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleDetailsResolveService = TestBed.get(VehicleDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
