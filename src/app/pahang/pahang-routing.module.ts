import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PahangPage } from './pahang.page';

const routes: Routes = [
  {
    path: '',
    component: PahangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PahangPageRoutingModule {}
