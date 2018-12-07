import { Component, OnInit } from '@angular/core';
import { SpeciesInterface } from '../species-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specie-details',
  templateUrl: './specie-details.component.html',
  styleUrls: ['./specie-details.component.scss']
})
export class SpecieDetailsComponent implements OnInit {

  specie: SpeciesInterface;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlanetDetails();
  }

  getPlanetDetails() {
    this.route.data.subscribe(data => {
      this.specie = data.specie;
    });
  }
  getRoute(apiUrl: string): string {
    const segments = apiUrl.split('/');
    const length = segments.length;
    const route = `${segments[length - 3]}/${segments[length - 2]}`;

    return `/${route}`;
  }

}
