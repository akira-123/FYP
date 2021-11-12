import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BayuPageRoutingModule } from './bayu-routing.module';

import { BayuPage } from './bayu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BayuPageRoutingModule
  ],
  declarations: [BayuPage]
})
export class BayuPageModule {}
