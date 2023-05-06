import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../shared/utils/Constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  imageHeaderUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Shuriken_%28Naruto%29.svg/2048px-Shuriken_%28Naruto%29.svg.png';
  
  constructor(private readonly router: Router){}

  goToMainPage(): void {
    this.router.navigate([Constants.ROUTES.MAIN_PAGE]);
  }
}
