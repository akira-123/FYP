import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KlebangPage } from './klebang.page';

const routes: Routes = [
  {
    path: '',
    component: KlebangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KlebangPageRoutingModule {}
