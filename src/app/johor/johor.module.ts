import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JohorPageRoutingModule } from './johor-routing.module';

import { JohorPage } from './johor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JohorPageRoutingModule
  ],
  declarations: [JohorPage]
})
export class JohorPageModule {}
