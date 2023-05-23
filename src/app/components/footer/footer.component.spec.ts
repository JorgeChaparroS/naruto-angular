import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Constants } from '../../shared/utils/Constants';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to About page', () => {
    spyOn(component.router, 'navigate')
    component.onNavigateTo('about');
    expect(component.router.navigate).toHaveBeenCalledWith([Constants.ROUTES.ABOUT_PAGE]);
  });

  it('should redirect to Author page', () => {
    spyOn(component.router, 'navigate')
    component.onNavigateTo('author');
    expect(component.router.navigate).toHaveBeenCalledWith([Constants.ROUTES.AUTHOR_PAGE]);
  });
});
