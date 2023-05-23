import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainPageComponent } from './card-main-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Constants } from '../../shared/utils/Constants';

describe('CardMainPageComponent', () => {
  let component: CardMainPageComponent;
  let fixture: ComponentFixture<CardMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [CardMainPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CardMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onGoToPage should emit route for Clans', () => {
    spyOn(component.onGoToPage, 'emit');
    component.buttonClicked('clans');
    expect(component.onGoToPage.emit).toHaveBeenCalledWith(Constants.ROUTES.CLANS_PAGE);
  });

  it('onGoToPage should emit route for characters', () => {
    spyOn(component.onGoToPage, 'emit');
    component.buttonClicked('characters');
    expect(component.onGoToPage.emit).toHaveBeenCalledWith(Constants.ROUTES.CHARACTERS_PAGE);
  });
});
