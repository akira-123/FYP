import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NsembilanPage } from './nsembilan.page';

const routes: Routes = [
  {
    path: '',
    component: NsembilanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NsembilanPageRoutingModule {}
