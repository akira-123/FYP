import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KlccPageRoutingModule } from './klcc-routing.module';

import { KlccPage } from './klcc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KlccPageRoutingModule
  ],
  declarations: [KlccPage]
})
export class KlccPageModule {}
