import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantananiPage } from './mantanani.page';

const routes: Routes = [
  {
    path: '',
    component: MantananiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantananiPageRoutingModule {}
