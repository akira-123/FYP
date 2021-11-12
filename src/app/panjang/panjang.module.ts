import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanjangPageRoutingModule } from './panjang-routing.module';

import { PanjangPage } from './panjang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanjangPageRoutingModule
  ],
  declarations: [PanjangPage]
})
export class PanjangPageModule {}
