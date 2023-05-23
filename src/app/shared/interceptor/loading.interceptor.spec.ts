import { TestBed } from '@angular/core/testing';

import { LoadingInterceptor } from './loading.interceptor';
import { LoaderService } from '../../components/loader/loader.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('LoadingInterceptor', () => {
  
  let interceptor: LoadingInterceptor;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        LoadingInterceptor,
        LoaderService
      ]
    });
    
    interceptor = TestBed.inject(LoadingInterceptor);
    loaderService = TestBed.inject(LoaderService);

  });

  it('should be created', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should set loading to true when request is intercepted and false after request is handled', () => {
    const mockRequest = new HttpRequest('GET', '/api/data');

    const next: any = {
      handle: () => {
        return Observable.create((subscriber: any) => {
          subscriber.complete();
        });
      }
    };
    
    spyOn(loaderService, 'setLoading');
    const interceptedEvent = interceptor.intercept(mockRequest, next);

    expect(loaderService.setLoading).toHaveBeenCalledWith(true);

    interceptedEvent.subscribe(() => {
      expect(loaderService.setLoading).toHaveBeenCalledWith(false);
    });
  });
  
});
