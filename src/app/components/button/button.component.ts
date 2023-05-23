import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonLabel = '';
  @Input() buttonClass = '';
  @Output() onClicked = new EventEmitter();


  onButtonClicked(): void {
    this.onClicked.emit();
  }
}
