import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KlPageRoutingModule } from './kl-routing.module';

import { KlPage } from './kl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KlPageRoutingModule
  ],
  declarations: [KlPage]
})
export class KlPageModule {}
