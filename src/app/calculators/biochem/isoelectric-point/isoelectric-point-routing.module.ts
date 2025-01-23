import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsoelectricPointPage } from './isoelectric-point.page';

const routes: Routes = [
  {
    path: '',
    component: IsoelectricPointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsoelectricPointPageRoutingModule {}
