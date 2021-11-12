import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanjangPage } from './panjang.page';

const routes: Routes = [
  {
    path: '',
    component: PanjangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanjangPageRoutingModule {}
