import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CahayaPageRoutingModule } from './cahaya-routing.module';

import { CahayaPage } from './cahaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CahayaPageRoutingModule
  ],
  declarations: [CahayaPage]
})
export class CahayaPageModule {}
