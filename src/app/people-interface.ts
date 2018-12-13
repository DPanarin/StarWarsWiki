import {FilmInterface} from './film-interface';
import {StarshipInterface} from './starship-interface';

export interface PeopleInterface {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: Array<string>;
    filmsData?: Array<FilmInterface>;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: Array<string>;
    starships: Array<string>;
    starshipsData: Array<StarshipInterface>;
    url: string;
    vehicles: Array<string>;
}
