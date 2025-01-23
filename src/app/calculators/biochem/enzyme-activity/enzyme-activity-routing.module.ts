import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnzymeActivityPage } from './enzyme-activity.page';

const routes: Routes = [
  {
    path: '',
    component: EnzymeActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnzymeActivityPageRoutingModule {}
