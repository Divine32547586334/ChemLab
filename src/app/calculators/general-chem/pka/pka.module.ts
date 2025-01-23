import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PkaPageRoutingModule } from './pka-routing.module';

import { PkaPage } from './pka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PkaPageRoutingModule
  ],
  declarations: [PkaPage]
})
export class PkaPageModule {}
