import { PeopleInterface } from './../people-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

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
