import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';

  constructor(private loadingService: LoadingService) {}

  get loading() {
    return this.loadingService.loading;
  }
}
