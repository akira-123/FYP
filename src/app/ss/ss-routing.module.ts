import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsPage } from './ss.page';

const routes: Routes = [
  {
    path: '',
    component: SsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsPageRoutingModule {}
