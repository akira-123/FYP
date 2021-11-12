import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelatanPage } from './selatan.page';

const routes: Routes = [
  {
    path: '',
    component: SelatanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelatanPageRoutingModule {}
