import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NsembilanPageRoutingModule } from './nsembilan-routing.module';

import { NsembilanPage } from './nsembilan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NsembilanPageRoutingModule
  ],
  declarations: [NsembilanPage]
})
export class NsembilanPageModule {}
