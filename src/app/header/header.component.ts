import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {ActivatedRoute, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  form: FormGroup;

  categoriesNames = [];

  menuHided = true;

  showBackButton = false;

  constructor(private dataService: DataService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.dataService.getCategories().subscribe(categories => {
      this.categoriesNames = Object.keys(categories);
    });

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
    this.router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      this.showBackButton = e.url.length > 1;
    });
  }

  toggle() {
    this.menuHided = !this.menuHided;
  }

  back() {
    this.showBackButton = false;
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }

}
