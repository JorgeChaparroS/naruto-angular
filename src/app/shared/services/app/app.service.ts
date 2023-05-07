import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants, ClanType, CharacterType } from '../../utils/Constants';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private clans: ClanType[] | undefined;

  constructor(private readonly http: HttpClient) { }

  getClansFromApi(): Observable<ClanType[]> {
    return this.http.get<ClanType[]>(Constants.API + Constants.API_PATH.CLAN);
  }

  getCharactersFromApi(offset: number, sort: boolean): Observable<CharacterType[]> {
    return this.http.get<CharacterType[]>(Constants.API + Constants.API_PATH.CHARACTER + `?limit=10&offset=${offset}${sort ? '&sort=true' : ''}`);
  }

  setClans(clans: ClanType[]): void {
    this.clans = clans;
  }

  getClans(): ClanType[] | undefined {
    return this.clans;
  }
}
