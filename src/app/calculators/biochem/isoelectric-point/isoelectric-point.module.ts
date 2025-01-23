import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsoelectricPointPageRoutingModule } from './isoelectric-point-routing.module';

import { IsoelectricPointPage } from './isoelectric-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsoelectricPointPageRoutingModule
  ],
  declarations: [IsoelectricPointPage]
})
export class IsoelectricPointPageModule {}
