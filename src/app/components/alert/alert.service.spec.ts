import { TestBed } from '@angular/core/testing';
import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should close modal if element exists', () => {
    const id = 'modalId';
    const modalElement = document.createElement('div');
    modalElement.id = id;
    document.body.appendChild(modalElement);
    service.close(id);
    expect(modalElement.style.display).toBe('none');
  });

  it('should open modal if element exists', () => {
    const id = 'modalId2';
    const modalElement = document.createElement('div');
    modalElement.id = id;
    document.body.appendChild(modalElement);
    service.open(id);
    expect(modalElement.style.display).toBe('flex');
  });
});
