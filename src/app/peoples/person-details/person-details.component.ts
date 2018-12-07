import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleInterface} from '../../people-interface';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  person: PeopleInterface;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPersonDetails();
  }

  getPersonDetails() {
    this.route.data.subscribe(data => {
      this.person = data.person;
    });
  }
  getRoute(apiUrl: string): string {
    const segments = apiUrl.split('/');
    const length = segments.length;
    const route = `${segments[length - 3]}/${segments[length - 2]}`;

    return `/${route}`;
  }

}
