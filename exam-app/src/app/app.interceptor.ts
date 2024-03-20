import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: 'http://localhost:3000/'+request.url,
      withCredentials:true
    })
    return next.handle(request);
  }
}

export const appInterceptorProvider:Provider = {
  multi:true,
  useClass:AppInterceptor,
  provide:HTTP_INTERCEPTORS
}
