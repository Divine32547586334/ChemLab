import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemlabSplashScreenPage } from './chemlab-splash-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ChemlabSplashScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemlabSplashScreenPageRoutingModule {}
