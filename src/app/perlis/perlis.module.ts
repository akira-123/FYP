import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerlisPageRoutingModule } from './perlis-routing.module';

import { PerlisPage } from './perlis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerlisPageRoutingModule
  ],
  declarations: [PerlisPage]
})
export class PerlisPageModule {}
