import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CahayaPage } from './cahaya.page';

const routes: Routes = [
  {
    path: '',
    component: CahayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CahayaPageRoutingModule {}
