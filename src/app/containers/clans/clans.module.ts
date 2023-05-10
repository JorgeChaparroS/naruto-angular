import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClansComponent } from './clans.component';
import { ClansRoutingModule } from './clans-routing.module';
import { TranslateModule} from '@ngx-translate/core';
import { PaginatorModule } from '../../components/paginator/paginator.module';
import { InputModule } from '../../components/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClansComponent],
  imports: [
    CommonModule,
    ClansRoutingModule,
    TranslateModule,
    PaginatorModule,
    InputModule,
    ReactiveFormsModule
  ]
})
export class ClansModule { }
