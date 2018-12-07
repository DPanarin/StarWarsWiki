import { VehicleInterface } from './../vehicle-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle: VehicleInterface;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlanetDetails();
  }

  getPlanetDetails() {
    this.route.data.subscribe(data => {
      this.vehicle = data.vehicle;
    });
  }
  getRoute(apiUrl: string): string {
    const segments = apiUrl.split('/');
    const length = segments.length;
    const route = `${segments[length - 3]}/${segments[length - 2]}`;

    return `/${route}`;
  }

}
