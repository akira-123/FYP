import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegolandPageRoutingModule } from './legoland-routing.module';

import { LegolandPage } from './legoland.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegolandPageRoutingModule
  ],
  declarations: [LegolandPage]
})
export class LegolandPageModule {}
