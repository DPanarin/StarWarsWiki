import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsListComponent } from './items-list/items-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { SpecieDetailsComponent } from './specie-details/specie-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    PeopleDetailsComponent,
    FilmDetailsComponent,
    PlanetDetailsComponent,
    VehicleDetailsComponent,
    StarshipDetailsComponent,
    SpecieDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
