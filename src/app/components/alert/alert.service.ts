import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  close(id: string): void {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  open(id: string): void {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'flex';
    }
  }
}
