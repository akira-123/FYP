import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IramaPageRoutingModule } from './irama-routing.module';

import { IramaPage } from './irama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IramaPageRoutingModule
  ],
  declarations: [IramaPage]
})
export class IramaPageModule {}
