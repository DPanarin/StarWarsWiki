import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import {PeoplesListComponent} from './peoples-list/peoples-list.component';
import {PersonDetailsComponent} from './person-details/person-details.component';

@NgModule({
  declarations: [PeoplesListComponent, PersonDetailsComponent],
  imports: [
    CommonModule,
    PeoplesRoutingModule
  ]
})
export class PeoplesModule { }
