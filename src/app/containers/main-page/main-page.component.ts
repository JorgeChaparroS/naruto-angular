import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(public router: Router){}

  goToPage(route: string): void {
    this.router.navigate([route]);
  }
}
