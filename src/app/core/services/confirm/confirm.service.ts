import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface ConfirmOptions {
  confirmText?: string;
  confirmTitle?: string;
  cancelButton?: string;
  confirmButton?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  showConfirm = new BehaviorSubject(false);
  options: ConfirmOptions = {};
  responseSubject = new BehaviorSubject(null);

  constructor() {
  }

  show(options: ConfirmOptions): Observable<boolean> {
    this.showConfirm.next(true);
    this.options = options;
    return this.responseSubject.asObservable();
  }
}
