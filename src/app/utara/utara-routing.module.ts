import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtaraPage } from './utara.page';

const routes: Routes = [
  {
    path: '',
    component: UtaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtaraPageRoutingModule {}
