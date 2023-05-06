import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../../components/loader/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private readonly loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.loaderService.setLoading(false);
      })
    );
  }
}
