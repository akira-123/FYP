import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfamosaPage } from './afamosa.page';

const routes: Routes = [
  {
    path: '',
    component: AfamosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfamosaPageRoutingModule {}
