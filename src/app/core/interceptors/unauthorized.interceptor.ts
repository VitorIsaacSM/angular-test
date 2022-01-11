
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const token = localStorage.getItem('token');
            if (err.status === 401 && token) {
                // auto logout if 401 response returned from api
                this.toastr.error('Sua sessão expirou, por favor faça login novamente.');
                localStorage.removeItem('token')
            }
            console.error(err);
            // const error = err.message || err.statusText;
            return throwError(err);
        }));
    }
}
