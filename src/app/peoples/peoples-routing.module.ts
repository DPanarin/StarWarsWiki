import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeoplesListComponent} from './peoples-list/peoples-list.component';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {PersonDetailsResolveService} from './person-details/person-details-resolve.service';
import {PeopleListResolveService} from './peoples-list/people-list-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: PeoplesListComponent,
    resolve: {
      categoryList: PeopleListResolveService
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
