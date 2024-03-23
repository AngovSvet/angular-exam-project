import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ErrorService } from './core/error/error.service';
import { Router } from '@angular/router';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private errorService:ErrorService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: 'http://localhost:3000/'+request.url,
      withCredentials:true
    })

    return next.handle(request).pipe(catchError((err)=>{

      if (err.status===401) {
        this.router.navigate(['/user/login'])
      } else{
        this.errorService.setError(err)
        this.router.navigate(['/error'])
      }

      return [err]
    }));
  }
}

export const appInterceptorProvider:Provider = {
  multi:true,
  useClass:AppInterceptor,
  provide:HTTP_INTERCEPTORS
}
