import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilmDetailsResolveService {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getItem(`films/${route.paramMap.get('film')}`);
  }
}
