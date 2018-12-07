import { Component, OnInit } from '@angular/core';
import { StarshipInterface } from '../starship-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit {

  starship: StarshipInterface;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlanetDetails();
  }

  getPlanetDetails() {
    this.route.data.subscribe(data => {
      this.starship = data.starship;
    });
  }
  getRoute(apiUrl: string): string {
    const segments = apiUrl.split('/');
    const length = segments.length;
    const route = `${segments[length - 3]}/${segments[length - 2]}`;

    return `/${route}`;
  }

}
