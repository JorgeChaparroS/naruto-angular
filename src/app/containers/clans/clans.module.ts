import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClansComponent } from './clans.component';
import { ClansRoutingModule } from './clans-routing.module';

@NgModule({
  declarations: [ClansComponent],
  imports: [
    CommonModule,
    ClansRoutingModule
  ]
})
export class ClansModule { }
