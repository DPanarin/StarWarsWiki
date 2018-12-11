import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  backPath: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.backPath = this.route.snapshot.queryParamMap.get('errorFrom');
  }

}
