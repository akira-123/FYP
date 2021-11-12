import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfamosaPageRoutingModule } from './afamosa-routing.module';

import { AfamosaPage } from './afamosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfamosaPageRoutingModule
  ],
  declarations: [AfamosaPage]
})
export class AfamosaPageModule {}
