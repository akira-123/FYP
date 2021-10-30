import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KlPage } from './kl.page';

const routes: Routes = [
  {
    path: '',
    component: KlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KlPageRoutingModule {}
