import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KlebangPageRoutingModule } from './klebang-routing.module';

import { KlebangPage } from './klebang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KlebangPageRoutingModule
  ],
  declarations: [KlebangPage]
})
export class KlebangPageModule {}
