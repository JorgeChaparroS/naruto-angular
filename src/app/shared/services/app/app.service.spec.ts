import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppService } from './app.service';
import { CharacterType, ClanType, Constants } from '../../utils/Constants';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  const clanMock = [
    {
      link: 'fake-link1',
      icon: 'fake-icon',
      name: 'fake-name',
      id: 123,
    }
  ];

  const charactersMock = [
    {
      about: ['About'],
      info: {},
      id: 1234,
      name: 'fake-name',
      images: ['images'],
      page: 'link.com',
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return clans from API', () => {
    service.getClansFromApi().subscribe((clans: ClanType[]) => {
      expect(clans).toEqual(clanMock);
    });
    const req = httpMock.expectOne(Constants.API + Constants.API_PATH.CLAN);
    expect(req.request.method).toBe('GET');
    req.flush(clanMock);
  });

  it('should return characters from API', () => {
    service.getCharactersFromApi(0, false, 'fake-name').subscribe((characters: CharacterType[]) => {
      expect(characters).toEqual(charactersMock);
    });
    const req = httpMock.expectOne(Constants.API + Constants.API_PATH.CHARACTER + '?limit=6&offset=0&name=fake-name');
    expect(req.request.method).toBe('GET');
    req.flush(charactersMock);
  });

  it('setter and getter for clans', () => {
    service.setClans(clanMock);
    expect(service.getClans()).toEqual(clanMock);
  });
});
