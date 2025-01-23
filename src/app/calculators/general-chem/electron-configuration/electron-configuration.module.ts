import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectronConfigurationPageRoutingModule } from './electron-configuration-routing.module';

import { ElectronConfigurationPage } from './electron-configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectronConfigurationPageRoutingModule
  ],
  declarations: [ElectronConfigurationPage]
})
export class ElectronConfigurationPageModule {}
