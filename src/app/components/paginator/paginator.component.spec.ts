import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent]
    });
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change to next page and emit new value', () => {
    component.currentPage = 0;
    spyOn(component.onPagination, 'emit');
    component.nextPage();
    expect(component.currentPage).toEqual(1);
    expect(component.onPagination.emit).toHaveBeenCalledWith(1);
  });

  
  it('should change to prev page and emit new value', () => {
    component.currentPage = 1;
    spyOn(component.onPagination, 'emit');
    component.prevPage();
    expect(component.currentPage).toEqual(0);
    expect(component.onPagination.emit).toHaveBeenCalledWith(0);
  });
});
