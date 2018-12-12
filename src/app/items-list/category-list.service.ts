import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {DataService} from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService implements Resolve<any> {



  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.searchItem(route.paramMap.get('query'), route.paramMap.get('category'));
  }
}
