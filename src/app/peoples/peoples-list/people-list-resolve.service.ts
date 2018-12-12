import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {DataService} from '../../data.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleListResolveService implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const pageNumber = route.queryParamMap.get('page') || '1';
    const pageLink = `https://swapi.co/api/people/?page=${pageNumber}`;
    return this.dataService.getPage(pageLink);
  }
}
