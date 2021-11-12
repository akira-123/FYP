import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AquariaPageRoutingModule } from './aquaria-routing.module';

import { AquariaPage } from './aquaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AquariaPageRoutingModule
  ],
  declarations: [AquariaPage]
})
export class AquariaPageModule {}
