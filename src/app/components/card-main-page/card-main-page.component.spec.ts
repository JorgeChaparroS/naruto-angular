import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainPageComponent } from './card-main-page.component';

describe('CardMainPageComponent', () => {
  let component: CardMainPageComponent;
  let fixture: ComponentFixture<CardMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMainPageComponent]
    });
    fixture = TestBed.createComponent(CardMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
