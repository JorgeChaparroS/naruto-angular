import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClansComponent } from './clans.component';


const routes: Routes = [
  {
    path: '',
    component: ClansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClansRoutingModule { }