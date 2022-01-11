import { LoadingComponent } from './components/loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SafePipe } from './pipes/sanitizer.pipe';

@NgModule({
  declarations: [LoadingComponent, ConfirmComponent, SafePipe],
  exports: [LoadingComponent, ConfirmComponent, SafePipe],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
