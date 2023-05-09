import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Constants } from './shared/utils/Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  modalErrorId = Constants.COMPONENTS.MODAL_ERROR_ID;
  
  constructor(private readonly translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
