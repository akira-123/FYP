import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaratPageRoutingModule } from './barat-routing.module';

import { BaratPage } from './barat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaratPageRoutingModule
  ],
  declarations: [BaratPage]
})
export class BaratPageModule {}
