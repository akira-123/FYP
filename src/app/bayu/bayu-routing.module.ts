import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BayuPage } from './bayu.page';

const routes: Routes = [
  {
    path: '',
    component: BayuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BayuPageRoutingModule {}
