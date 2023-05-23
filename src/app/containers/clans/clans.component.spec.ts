import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClansComponent } from './clans.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppService } from '../../shared/services/app/app.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../../components/input/input.module';

const appServiceMock = {
  getClans: () => {},
  setClans: () => {},
  getClansFromApi: () => {}
};

describe('ClansComponent', () => {
  let component: ClansComponent;
  let fixture: ComponentFixture<ClansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        InputModule
      ],
      declarations: [ClansComponent],
      providers: [
        { provide: AppService, useValue: appServiceMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ClansComponent);
    component = fixture.componentInstance;
    appServiceMock.getClansFromApi = () => {
      return of([
        {
          link: 'fake-link1',
          icon: 'fake-icon',
          name: 'fake-name',
          id: 123,
        }
      ]);
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit with clans of no length', () => {
    appServiceMock.getClans = () => {
      return []
    };
    spyOn(component, 'getClans');
    component.ngOnInit();
    expect(component.getClans).toHaveBeenCalled();
  });

  it('subscribeToFormChanges', () => {
    spyOn(component, 'filterByName');
    component.subscribeToFormChanges();
    component.searchForm.get('name')?.setValue('1234');
    expect(component.filterByName).toHaveBeenCalledWith('1234');
  });

  it('filterByName', () => {
    component.clans = [
      {
        link: 'fake-link1',
        icon: 'fake-icon',
        name: 'fake-name',
        id: 123,
      },
      {
        link: 'fake-link1',
        icon: 'fake-icon',
        name: 'fake-name2',
        id: 123,
      }
    ];
    spyOn(component, 'generatePaginationRecords');
    component.filterByName('fake-name2');
    expect(component.clansFiltered?.length).toEqual(1);
    expect(component.currentPage).toEqual(0);
    expect(component.generatePaginationRecords).toHaveBeenCalledWith(0);
  });

  it('onPagination', () => {
    component.clansFiltered = [];
    component.onPagination(1);
    expect(component.currentPage).toEqual(1);
    expect(component.clansPaginated?.length).toEqual(0);
  });
});
