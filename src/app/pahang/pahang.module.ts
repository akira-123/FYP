import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PahangPageRoutingModule } from './pahang-routing.module';

import { PahangPage } from './pahang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PahangPageRoutingModule
  ],
  declarations: [PahangPage]
})
export class PahangPageModule {}
