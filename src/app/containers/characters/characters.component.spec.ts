import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../../components/input/input.module';
import { AppService } from '../../shared/services/app/app.service';
import { of } from 'rxjs';
import { Constants } from '../../shared/utils/Constants';

const appServiceMock = {
  getCharactersFromApi: () => {}
};

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        InputModule
      ],
      declarations: [CharactersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AppService, useValue: appServiceMock }
      ]
    });
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;

    appServiceMock.getCharactersFromApi = () => {
      return of([
        {
          about: ['About'],
          info: {},
          id: 1234,
          name: 'fake-name',
          images: ['images'],
          page: 'link.com',
        }
      ])
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('subscribeToFormChanges when name is empty', () => {
    component.subscribeToFormChanges();
    spyOn(component, 'resetPagination');
    spyOn(component, 'getCharacters');
    component.searchForm.get('name')?.setValue('');
    expect(component.resetPagination).toHaveBeenCalled();
    expect(component.getCharacters).toHaveBeenCalled();
  });

  it('onCheckDetail', () => {
    const character = {
      about: ['About'],
      info: {},
      id: 1234,
      name: 'fake-name',
      images: ['images'],
      page: 'link.com',
    };
    spyOn(component.alertService, 'open');
    component.onCheckDetail(character);
    expect(component.characterSelected).toEqual(character);
    expect(component.indexImageCharacter).toEqual(0);
    expect(component.alertService.open).toHaveBeenCalledWith(Constants.COMPONENTS.ALERT_CHARACTER_DETAIL);
  });

  it('onChangeImage increase', () => {
    component.indexImageCharacter = 0;
    component.onChangeImage('increase');
    expect(component.indexImageCharacter).toEqual(1);
  });

  it('onChangeImage decrease', () => {
    component.indexImageCharacter = 1;
    component.onChangeImage('decrease');
    expect(component.indexImageCharacter).toEqual(0);
  });

  it('buttonClicked', () => {
    component.searchForm.get('name')?.setValue('fakeName');
    spyOn(component, 'onPagination');
    component.buttonClicked();
    expect(component.onPagination).toHaveBeenCalledWith(0);
  });

  it('onPagination', () => {
    spyOn(component, 'getCharacters');
    component.onPagination(0);
    expect(component.currentPage).toEqual(0);
    expect(component.offset).toEqual(0);
    expect(component.getCharacters).toHaveBeenCalled();
  });

  it('closeDetail', () => {
    spyOn(component.alertService, 'close');
    component.closeDetail();
    expect(component.alertService.close).toHaveBeenCalledWith(Constants.COMPONENTS.ALERT_CHARACTER_DETAIL);
  });

  it('changeSorting', () => {
    component.sort = true;
    spyOn(component, 'resetPagination');
    spyOn(component, 'getCharacters');
    component.changeSorting();
    expect(component.sort).toBeFalse();
    expect(component.resetPagination).toHaveBeenCalled();
    expect(component.getCharacters).toHaveBeenCalled();
  });

  it('resetPagination', () => {
    component.resetPagination();
    expect(component.currentPage).toEqual(0);
    expect(component.offset).toEqual(0);
  });
});
