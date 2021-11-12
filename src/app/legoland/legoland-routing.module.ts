import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegolandPage } from './legoland.page';

const routes: Routes = [
  {
    path: '',
    component: LegolandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegolandPageRoutingModule {}
