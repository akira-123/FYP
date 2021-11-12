import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PbesarPage } from './pbesar.page';

const routes: Routes = [
  {
    path: '',
    component: PbesarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PbesarPageRoutingModule {}
