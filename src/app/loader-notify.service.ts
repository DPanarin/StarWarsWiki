import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderNotifyService {

  private requestFinished: BehaviorSubject<boolean>;

  constructor() {
    this.requestFinished = new BehaviorSubject(true);
  }

  setRequestStatus(status: boolean) {
    this.requestFinished.next(status);
  }

  getRequestStatus(): Observable<boolean> {
    return this.requestFinished.asObservable();
  }
}
