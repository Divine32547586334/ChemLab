import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PercentCompositionPage } from './percent-composition.page';

const routes: Routes = [
  {
    path: '',
    component: PercentCompositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PercentCompositionPageRoutingModule {}
