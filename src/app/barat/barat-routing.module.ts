import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaratPage } from './barat.page';

const routes: Routes = [
  {
    path: '',
    component: BaratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaratPageRoutingModule {}
