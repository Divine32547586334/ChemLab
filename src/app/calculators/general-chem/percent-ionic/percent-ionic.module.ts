import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PercentIonicPageRoutingModule } from './percent-ionic-routing.module';

import { PercentIonicPage } from './percent-ionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PercentIonicPageRoutingModule
  ],
  declarations: [PercentIonicPage]
})
export class PercentIonicPageModule {}
