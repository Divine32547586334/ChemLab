import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemicalNamePageRoutingModule } from './chemical-name-routing.module';

import { ChemicalNamePage } from './chemical-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemicalNamePageRoutingModule
  ],
  declarations: [ChemicalNamePage]
})
export class ChemicalNamePageModule {}
