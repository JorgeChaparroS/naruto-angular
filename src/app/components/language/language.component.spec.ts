import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageComponent } from './language.component';
import { TranslateModule } from '@ngx-translate/core';

describe('LanguageComponent', () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [LanguageComponent]
    });
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isExpanded should be true', () => {
    component.openSelector();
    expect(component.isExpanded).toBeTrue();
  });

  it('should change the language', () => {
    spyOn(component.translate, 'use');
    const newLanguage = 'es-CO';
    component.onChangeLanguage(newLanguage);
    expect(component.languageSelected).toEqual(newLanguage);
    expect(component.isExpanded).toBeFalse();
    expect(component.translate.use).toHaveBeenCalledWith(newLanguage);
  });

});
