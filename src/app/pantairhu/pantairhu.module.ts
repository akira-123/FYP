import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantairhuPageRoutingModule } from './pantairhu-routing.module';

import { PantairhuPage } from './pantairhu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantairhuPageRoutingModule
  ],
  declarations: [PantairhuPage]
})
export class PantairhuPageModule {}
