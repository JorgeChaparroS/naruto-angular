import { Component, Input } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() sizeInCols = 'col-10 col-md-8 col-xl-6';
  @Input() id = '';

  constructor(public alertService: AlertService) {}

  closeAlert(): void {
    this.alertService.close(this.id);
  }
}
