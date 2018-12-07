import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {DataService} from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService implements Resolve<any> {



  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const category = route.paramMap.get('category');
    const pageNumber = route.queryParamMap.get('page') || '1';
    const pageLink = `https://swapi.co/api/${category}/?page=${pageNumber}`;
    return this.dataService.getPage(pageLink);
  }
}
