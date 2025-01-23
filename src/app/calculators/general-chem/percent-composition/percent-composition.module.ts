import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PercentCompositionPageRoutingModule } from './percent-composition-routing.module';

import { PercentCompositionPage } from './percent-composition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PercentCompositionPageRoutingModule
  ],
  declarations: [PercentCompositionPage]
})
export class PercentCompositionPageModule {}
