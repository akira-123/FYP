import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SarawakPageRoutingModule } from './sarawak-routing.module';

import { SarawakPage } from './sarawak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SarawakPageRoutingModule
  ],
  declarations: [SarawakPage]
})
export class SarawakPageModule {}
