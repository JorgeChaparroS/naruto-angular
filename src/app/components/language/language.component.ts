import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  languageSelected = 'en';
  languagesAvailable = ['en', 'es'];
  isExpanded = false;

  constructor(private readonly translate: TranslateService) {

  }

  openSelector(): void {
    this.isExpanded = true;
  }

  onChangeLanguage(language: string): void {
    this.languageSelected = language;
    this.translate.use(language);
    this.isExpanded = false;
  }

}
