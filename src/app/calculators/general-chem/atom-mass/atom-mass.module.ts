import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtomMassPageRoutingModule } from './atom-mass-routing.module';

import { AtomMassPage } from './atom-mass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtomMassPageRoutingModule
  ],
  declarations: [AtomMassPage]
})
export class AtomMassPageModule {}
