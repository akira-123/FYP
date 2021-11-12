import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantananiPageRoutingModule } from './mantanani-routing.module';

import { MantananiPage } from './mantanani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantananiPageRoutingModule
  ],
  declarations: [MantananiPage]
})
export class MantananiPageModule {}
