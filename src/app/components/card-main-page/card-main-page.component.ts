import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Constants } from 'src/app/shared/utils/Constants';

@Component({
  selector: 'app-card-main-page',
  templateUrl: './card-main-page.component.html',
  styleUrls: ['./card-main-page.component.scss']
})
export class CardMainPageComponent {

  @Input() cardImageUrl = '';
  @Input() cardFor = '';
  @Input() cardTile = '';
  @Input() cardDescription = '';
  @Output() onGoToPage = new EventEmitter();

  buttonClicked(cardFor: string): void {
    let route = Constants.ROUTES.CLANS_PAGE;
    if (cardFor === 'characters') {
      route = Constants.ROUTES.CHARACTERS_PAGE;
    }
    this.onGoToPage.emit(route);
  }
}
 