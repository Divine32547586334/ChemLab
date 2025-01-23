import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PercentIonicPage } from './percent-ionic.page';

const routes: Routes = [
  {
    path: '',
    component: PercentIonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PercentIonicPageRoutingModule {}
