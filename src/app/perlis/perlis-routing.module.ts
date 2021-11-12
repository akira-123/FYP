import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerlisPage } from './perlis.page';

const routes: Routes = [
  {
    path: '',
    component: PerlisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerlisPageRoutingModule {}
