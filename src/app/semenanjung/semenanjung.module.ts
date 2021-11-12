import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemenanjungPageRoutingModule } from './semenanjung-routing.module';

import { SemenanjungPage } from './semenanjung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemenanjungPageRoutingModule
  ],
  declarations: [SemenanjungPage]
})
export class SemenanjungPageModule {}
