import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnzymeActivityPageRoutingModule } from './enzyme-activity-routing.module';

import { EnzymeActivityPage } from './enzyme-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnzymeActivityPageRoutingModule
  ],
  declarations: [EnzymeActivityPage]
})
export class EnzymeActivityPageModule {}
