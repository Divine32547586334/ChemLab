import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtomMassPage } from './atom-mass.page';

const routes: Routes = [
  {
    path: '',
    component: AtomMassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtomMassPageRoutingModule {}
