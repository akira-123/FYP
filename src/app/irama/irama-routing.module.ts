import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IramaPage } from './irama.page';

const routes: Routes = [
  {
    path: '',
    component: IramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IramaPageRoutingModule {}
