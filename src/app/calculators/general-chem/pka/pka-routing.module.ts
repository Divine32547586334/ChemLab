import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PkaPage } from './pka.page';

const routes: Routes = [
  {
    path: '',
    component: PkaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PkaPageRoutingModule {}
