import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCharacterComponent } from './card-character.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('CardCharacterComponent', () => {
  let component: CardCharacterComponent;
  let fixture: ComponentFixture<CardCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [CardCharacterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CardCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Output onCheckDetail should emit', () => {
    const info = {
      name: '',
      fieldTest: ''
    };
    component.characterInfo = info;
    spyOn(component.onCheckDetail, 'emit');
    component.buttonClicked();
    expect(component.onCheckDetail.emit).toHaveBeenCalledWith(info);
  });
});
