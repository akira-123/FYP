import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PbesarPageRoutingModule } from './pbesar-routing.module';

import { PbesarPage } from './pbesar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PbesarPageRoutingModule
  ],
  declarations: [PbesarPage]
})
export class PbesarPageModule {}
