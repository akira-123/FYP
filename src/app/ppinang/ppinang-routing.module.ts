import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpinangPage } from './ppinang.page';

const routes: Routes = [
  {
    path: '',
    component: PpinangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpinangPageRoutingModule {}
