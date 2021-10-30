import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MelakaPageRoutingModule } from './melaka-routing.module';

import { MelakaPage } from './melaka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MelakaPageRoutingModule
  ],
  declarations: [MelakaPage]
})
export class MelakaPageModule {}
