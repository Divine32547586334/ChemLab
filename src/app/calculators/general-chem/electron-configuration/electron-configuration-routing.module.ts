import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectronConfigurationPage } from './electron-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: ElectronConfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectronConfigurationPageRoutingModule {}
