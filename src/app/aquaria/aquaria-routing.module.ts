import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AquariaPage } from './aquaria.page';

const routes: Routes = [
  {
    path: '',
    component: AquariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AquariaPageRoutingModule {}
