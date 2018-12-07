import { Component, OnInit } from '@angular/core';
import { FilmInterface } from '../film-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  film: FilmInterface;
  displayCrawls = true;
  collapsed = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPersonDetails();
    setTimeout(() => {
      this.displayCrawls = false;
      this.collapsed = !this.collapsed;
    }, 15000);
  }

  getPersonDetails() {
    this.route.data.subscribe(data => {
      this.film = data.film;
    });
  }
  getRoute(apiUrl: string): string {
    const segments = apiUrl.split('/');
    const length = segments.length;
    const route = `${segments[length - 3]}/${segments[length - 2]}`;

    return `/${route}`;
  }

}
