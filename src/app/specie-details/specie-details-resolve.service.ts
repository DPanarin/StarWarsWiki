import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpecieDetailsResolveService {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getItem(`species/${route.paramMap.get('specie')}`);
  }
}
