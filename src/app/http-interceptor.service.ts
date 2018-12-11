import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaderNotifyService} from './loader-notify.service';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {


  constructor(private status: LoaderNotifyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.status.setRequestStatus(false);
    return next.handle(req).pipe(finalize(() => {
      this.status.setRequestStatus(true);
    }));
  }
}
