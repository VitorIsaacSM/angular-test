import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: boolean;

  constructor() {
    this.loading = false;
  }

  showLoading() {
    requestAnimationFrame(() => this.loading = true);
  }

  hideLoading() {
    requestAnimationFrame(() => this.loading = false);
  }
}
