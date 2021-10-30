import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SabahPage } from './sabah.page';

const routes: Routes = [
  {
    path: '',
    component: SabahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SabahPageRoutingModule {}
