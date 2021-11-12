import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SarawakPage } from './sarawak.page';

const routes: Routes = [
  {
    path: '',
    component: SarawakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SarawakPageRoutingModule {}
