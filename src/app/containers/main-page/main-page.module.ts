import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { CardMainPageComponent } from '../../components/card-main-page/card-main-page.component';
import { ButtonModule } from '../../components/button/button.module';
import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    MainPageComponent,
    CardMainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ButtonModule,
    TranslateModule
  ]
})

export class MainPageModule { }
