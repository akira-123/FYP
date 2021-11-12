import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantairhuPage } from './pantairhu.page';

const routes: Routes = [
  {
    path: '',
    component: PantairhuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantairhuPageRoutingModule {}
