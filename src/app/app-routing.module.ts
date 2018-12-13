import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { SpecieDetailsComponent } from './specie-details/specie-details.component';
import { PlanetDetailsResolveService } from './planet-details/planet-details-resolve.service';
import { FilmDetailsResolveService } from './film-details/film-details-resolve.service';
import { SpecieDetailsResolveService } from './specie-details/specie-details-resolve.service';
import { VehicleDetailsResolveService } from './vehicle-details/vehicle-details-resolve.service';
import { StarshipDetailsResolveService } from './starship-details/starship-details-resolve.service';
import {ErrorComponent} from './error/error.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {CategoryResolveService} from './items-list/category-resolve.service';
import {CategoryListService} from './items-list/category-list.service';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: 'search/:category/:query',
    pathMatch: 'full',
    component: ItemsListComponent,
    resolve: {
      categoryList: CategoryListService
    }
  },
  {
    path: 'people',
    loadChildren: './peoples/peoples.module#PeoplesModule'
  },
  // },
  // {
  //   path: 'people/:person',
  //   component: PeopleDetailsComponent,
  //   resolve: {
  //     person: PeopleDetailsResolveService
  //   }
  // },
  {
    path: 'films/:film',
    component: FilmDetailsComponent,
    resolve: {
      film: FilmDetailsResolveService
    }
  },
  {
    path: 'planets/:planet',
    component: PlanetDetailsComponent,
    resolve: {
      planet: PlanetDetailsResolveService
    }
  },
  {
    path: 'vehicles/:vehicle',
    component: VehicleDetailsComponent,
    resolve: {
      vehicle: VehicleDetailsResolveService
    }
  },
  {
    path: 'starships/:starship',
    component: StarshipDetailsComponent,
    resolve: {
      starship: StarshipDetailsResolveService
    }
  },
  {
    path: 'species/:specie',
    component: SpecieDetailsComponent,
    resolve: {
      specie: SpecieDetailsResolveService
    }
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      errorStatus: '',
      errorDetails: '',
      errorFrom: ''
    }
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
