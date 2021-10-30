import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SabahPageRoutingModule } from './sabah-routing.module';

import { SabahPage } from './sabah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SabahPageRoutingModule
  ],
  declarations: [SabahPage]
})
export class SabahPageModule {}
