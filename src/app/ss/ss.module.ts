import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SsPageRoutingModule } from './ss-routing.module';

import { SsPage } from './ss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SsPageRoutingModule
  ],
  declarations: [SsPage]
})
export class SsPageModule {}
