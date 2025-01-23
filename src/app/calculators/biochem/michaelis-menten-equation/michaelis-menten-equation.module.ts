import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MichaelisMentenEquationPageRoutingModule } from './michaelis-menten-equation-routing.module';

import { MichaelisMentenEquationPage } from './michaelis-menten-equation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MichaelisMentenEquationPageRoutingModule
  ],
  declarations: [MichaelisMentenEquationPage]
})
export class MichaelisMentenEquationPageModule {}
