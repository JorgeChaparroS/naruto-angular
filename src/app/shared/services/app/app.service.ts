import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../utils/Constants';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly http: HttpClient) { }

  getClans(): Observable<any> {
    return this.http.get(Constants.API + Constants.API_PATH.CLAN);
  }
}
