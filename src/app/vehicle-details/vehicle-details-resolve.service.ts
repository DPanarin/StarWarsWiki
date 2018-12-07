import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VehicleDetailsResolveService {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getItem(`vehicles/${route.paramMap.get('vehicle')}`);
  }
}
