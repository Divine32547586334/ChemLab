import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtomNamePageRoutingModule } from './atom-name-routing.module';

import { AtomNamePage } from './atom-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtomNamePageRoutingModule
  ],
  declarations: [AtomNamePage]
})
export class AtomNamePageModule {}
