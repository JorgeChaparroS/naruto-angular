import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';
import { ButtonModule } from '../../components/button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../../components/input/input.module';
import { PaginatorModule } from '../../components/paginator/paginator.module';
import { AlertModule } from '../../components/alert/alert.module';

@NgModule({
  declarations: [
    CharactersComponent,
    CardCharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    ButtonModule,
    TranslateModule,
    ReactiveFormsModule,
    InputModule,
    PaginatorModule,
    AlertModule
  ]
})
export class CharactersModule { }
