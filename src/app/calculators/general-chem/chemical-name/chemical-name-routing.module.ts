import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemicalNamePage } from './chemical-name.page';

const routes: Routes = [
  {
    path: '',
    component: ChemicalNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemicalNamePageRoutingModule {}
