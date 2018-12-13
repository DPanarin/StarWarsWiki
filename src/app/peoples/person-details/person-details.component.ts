import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleInterface} from '../../people-interface';
import {HttpErrorResponse} from '@angular/common/http';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  person: PeopleInterface;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getPersonDetails();
  }

  getPersonDetails() {
    this.route.data.subscribe(data => {
      this.person = data.person;
      if (this.person instanceof HttpErrorResponse) {
        this.router.navigate(['/error'], {
          queryParams:
            {
              errorFrom: 'people'
            }
        });
      }
    });
  }
  getItemName(key: string, index: number) {
    return this.person[key][index]['name'] || this.person[key][index]['title'];
  }

  getRoute(apiUrl: string): string {
    const segments = apiUrl.split('/');
    const length = segments.length;
    const route = `${segments[length - 3]}/${segments[length - 2]}`;

    return `/${route}`;
  }

}
