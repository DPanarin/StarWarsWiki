import { Component, OnInit } from '@angular/core';
import { PlanetInterface } from '../planet-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  planet: PlanetInterface;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlanetDetails();
  }

  getPlanetDetails() {
    this.route.data.subscribe(data => {
      this.planet = data.planet;
    });
  }
  getRoute(apiUrl: string): string {
    const segments = apiUrl.split('/');
    const length = segments.length;
    const route = `${segments[length - 3]}/${segments[length - 2]}`;

    return `/${route}`;
  }

}
