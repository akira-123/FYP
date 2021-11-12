import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimurPageRoutingModule } from './timur-routing.module';

import { TimurPage } from './timur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimurPageRoutingModule
  ],
  declarations: [TimurPage]
})
export class TimurPageModule {}
