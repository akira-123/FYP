import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KedahPageRoutingModule } from './kedah-routing.module';

import { KedahPage } from './kedah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KedahPageRoutingModule
  ],
  declarations: [KedahPage]
})
export class KedahPageModule {}
