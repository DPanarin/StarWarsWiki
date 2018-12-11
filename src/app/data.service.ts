import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemsListInterface } from './items-list-interface';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseEndPoint = 'https://swapi.co/api/';
  categories = {
    people: 'people',
    planets: 'planets',
    films: 'films',
    vehicles: 'vehicles',
    starships: 'starships',
    species: 'species'
  };

  constructor(private httpClient: HttpClient) { }


  getCategories() {
    return this.httpClient.get(this.baseEndPoint);
  }

  getItem(itemUrl: string) {
    return this.httpClient.get(this.baseEndPoint + itemUrl)
      .pipe(catchError(err => of (err)));
  }

  getPage(page: string) {
    return this.httpClient.get<ItemsListInterface<any>>(page)
      .pipe(catchError(err => of (err)));
  }

  getCategory(category: string) {
    return this.httpClient.get(this.baseEndPoint + category + '/');
  }

  // getPeoples() {
  //   return this.httpClient.get<ItemsListInterface<PeopleInterface>>(this.baseEndPoint + this.categories.people);
  // }

  // getPlanets() {
  //   return this.httpClient.get<ItemsListInterface<PlanetInterface>>(this.baseEndPoint + this.categories.planets);
  // }

  // getStarships() {
  //   return this.httpClient.get<ItemsListInterface<StarshipInterface>>(this.baseEndPoint + this.categories.starships);
  // }

  // getFilms() {
  //   return this.httpClient.get<ItemsListInterface<FilmInterface>>(this.baseEndPoint + this.categories.films);
  // }

  // getVehicles() {
  //   return this.httpClient.get<ItemsListInterface<VehicleInterface>>(this.baseEndPoint + this.categories.vehicles);
  // }

  // getSpecies() {
  //   return this.httpClient.get<ItemsListInterface<SpeciesInterface>>(this.baseEndPoint + this.categories.species);
  // }

  getList(category: string) {
      return this.httpClient.get(`https://swapi.co/api/${category}`);
  }

}
