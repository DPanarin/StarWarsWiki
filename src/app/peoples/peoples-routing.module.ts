import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeoplesListComponent} from './peoples-list/peoples-list.component';
import {CategoryListService} from '../items-list/category-list.service';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {PersonDetailsResolveService} from './person-details/person-details-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: PeoplesListComponent,
    resolve: {
      categoryList: CategoryListService
    },
  },
  {
    path: ':person',
    component: PersonDetailsComponent,
    resolve: {
      person: PersonDetailsResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesRoutingModule { }
