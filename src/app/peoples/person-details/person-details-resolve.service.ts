import { Injectable } from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRouteSnapshot} from '@angular/router';
import {mergeMap, map, tap} from 'rxjs/operators';
import {forkJoin, Observable, of} from 'rxjs';
import {FilmInterface} from '../../film-interface';
import {StarshipInterface} from '../../starship-interface';
import {VehicleInterface} from '../../vehicle-interface';
import {SpeciesInterface} from '../../species-interface';
import {PeopleInterface} from '../../people-interface';


@Injectable({
  providedIn: 'root'
})
export class PersonDetailsResolveService {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getItem<PeopleInterface>(`people/${route.paramMap.get('person')}`)
      .pipe(
        mergeMap((person) => this.fetchData<FilmInterface>(person.films)
          .pipe(
            map((films) => {
              person.filmsData = films;

              return person;
            })
          )
        ),
        mergeMap((person) => this.fetchData<StarshipInterface>(person.starships)
          .pipe(
            map((starships) => {
              person.starshipsData = starships;

              return person;
            })
          )
        ),

        mergeMap((person) => this.fetchData<VehicleInterface>(person.vehicles)
          .pipe(
            map((vehicles) => {
              person.vehiclesData = vehicles;

              return person;
            })
          )
        ),

        mergeMap((person) => this.fetchData<SpeciesInterface>(person.species)
          .pipe(
            map((species) => {
              person.speciesData = species;

              return person;
            })
          )
        )
      );
  }

  fetchData<T>(urls: string[]): Observable<T[]> {
    if (!urls.length) {
      return of([]);
    }

    return forkJoin(urls.map((url: string) => {
      return this.dataService.getItemFor(url);
    }));
  }
}
