import { Injectable } from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsResolveService {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataService.getItem(`people/${route.paramMap.get('person')}`);
  }
}