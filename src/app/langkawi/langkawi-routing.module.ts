import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangkawiPage } from './langkawi.page';

const routes: Routes = [
  {
    path: '',
    component: LangkawiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangkawiPageRoutingModule {}
