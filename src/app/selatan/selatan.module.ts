import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelatanPageRoutingModule } from './selatan-routing.module';

import { SelatanPage } from './selatan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelatanPageRoutingModule
  ],
  declarations: [SelatanPage]
})
export class SelatanPageModule {}
