import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtaraPageRoutingModule } from './utara-routing.module';

import { UtaraPage } from './utara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtaraPageRoutingModule
  ],
  declarations: [UtaraPage]
})
export class UtaraPageModule {}
