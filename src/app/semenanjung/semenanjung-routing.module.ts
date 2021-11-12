import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemenanjungPage } from './semenanjung.page';

const routes: Routes = [
  {
    path: '',
    component: SemenanjungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemenanjungPageRoutingModule {}
