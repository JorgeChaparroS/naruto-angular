import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CharacterType } from '../../shared/utils/Constants';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent {

  @Input() characterInfo: CharacterType | any;
  @Output() onCheckDetail = new EventEmitter();

  buttonClicked(): void {
    this.onCheckDetail.emit(this.characterInfo);
  }
}
 