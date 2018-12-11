import {Component, OnInit} from '@angular/core';
import {LoaderNotifyService} from './loader-notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StarWarsWiki';
  showLoader: boolean;

  constructor(private requestStatus: LoaderNotifyService) {
    this.requestStatus.getRequestStatus().subscribe((status: boolean) => {
      this.showLoader = !status;
    });
  }

  ngOnInit() {
  }
}
