import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimurPage } from './timur.page';

const routes: Routes = [
  {
    path: '',
    component: TimurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimurPageRoutingModule {}
