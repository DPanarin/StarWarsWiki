import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../data.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-peoples-list',
  templateUrl: './peoples-list.component.html',
  styleUrls: ['./peoples-list.component.scss']
})
export class PeoplesListComponent implements OnInit {

  itemsList: any[];
  nextPage: string;
  currentCategory: string;
  prevPage: string;
  currentPage: any;
  nextDisabled = this.nextPage === null;
  prevDisabled = this.prevPage === null;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    this.routerChange();
  }

  routerChange() {
    this.route.data.subscribe((data) => {
      if (data.categoryList instanceof HttpErrorResponse) {
        this.router.navigate(['/error'], {
          queryParams:
            {
              errorFrom: 'people'
            }
        });
      }
      this.currentCategory = data.category;
      this.setData(data.categoryList.results, data.categoryList.next, data.categoryList.previous);
      this.currentPage = this.route.snapshot.queryParamMap.get('page') || '1';
      this.setPageToRoute(this.currentPage);
    });
  }

  loadNext() {
    this.disableNavigation();
    this.dataService.getPage(this.nextPage).subscribe(data => {
      this.currentPage++;
      this.setNewPage(data);
      this.setPageToRoute(this.currentPage);
    });
  }

  loadPrevious() {
    this.disableNavigation();
    this.dataService.getPage(this.prevPage).subscribe(data => {
      this.currentPage--;
      this.setNewPage(data);
      this.setPageToRoute(this.currentPage);
    });
  }

  private disableNavigation() {
    this.nextDisabled = true;
    this.prevDisabled = true;
  }


  private setNewPage(data) {
    this.itemsList = data.results;
    this.itemsList.map((item) => {
      this.getItemId(item);
    });
    this.nextPage = data.next;
    this.prevPage = data.previous;
    this.setButtonStatus(data.next, data.previous);

  }

  protected setData(items, next, prev) {
    this.itemsList = items;
    this.nextPage = next;
    this.prevPage = prev;
    this.setButtonStatus(next, prev);

    this.itemsList.map((item) => {
      this.getItemId(item);
    });
  }

  private setButtonStatus(next: string, prev: string) {
    this.nextDisabled = next === null;
    this.prevDisabled = prev === null;
  }

  getItemId(item) {
    const itemUrlSegments = item.url.split('/');
    const itemId = itemUrlSegments[itemUrlSegments.length - 2];
    return item.id = itemId;
  }

  setPageToRoute(pageNumber) {
    this.router.navigate([], {queryParams: { page: pageNumber}});
  }

}
