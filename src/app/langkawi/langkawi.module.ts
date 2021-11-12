import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangkawiPageRoutingModule } from './langkawi-routing.module';

import { LangkawiPage } from './langkawi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LangkawiPageRoutingModule
  ],
  declarations: [LangkawiPage]
})
export class LangkawiPageModule {}
