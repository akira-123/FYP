import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpinangPageRoutingModule } from './ppinang-routing.module';

import { PpinangPage } from './ppinang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpinangPageRoutingModule
  ],
  declarations: [PpinangPage]
})
export class PpinangPageModule {}
