import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MelakaPage } from './melaka.page';

const routes: Routes = [
  {
    path: '',
    component: MelakaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MelakaPageRoutingModule {}
