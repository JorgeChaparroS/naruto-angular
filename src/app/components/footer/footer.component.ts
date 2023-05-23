import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/utils/Constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public router: Router){}

  onNavigateTo(route: string): void {
    const routeTo = route === 'about' ? Constants.ROUTES.ABOUT_PAGE : Constants.ROUTES.AUTHOR_PAGE;
    this.router.navigate([routeTo]);
  }
}
