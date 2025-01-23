import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemlabSplashScreenPageRoutingModule } from './chemlab-splash-screen-routing.module';

import { ChemlabSplashScreenPage } from './chemlab-splash-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemlabSplashScreenPageRoutingModule
  ],
  declarations: [ChemlabSplashScreenPage]
})
export class ChemlabSplashScreenPageModule {}
