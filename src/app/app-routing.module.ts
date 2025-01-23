import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'percent-ionic',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'percent-ionic',
    loadChildren: () => import('./calculators/general-chem/percent-ionic/percent-ionic.module').then( m => m.PercentIonicPageModule)
  },
  {
    path: 'percent-composition',
    loadChildren: () => import('./calculators/general-chem/percent-composition/percent-composition.module').then( m => m.PercentCompositionPageModule)
  },
  {
    path: 'atom-name',
    loadChildren: () => import('./calculators/general-chem/atom-name/atom-name.module').then( m => m.AtomNamePageModule)
  },
  {
    path: 'atom-mass',
    loadChildren: () => import('./calculators/general-chem/atom-mass/atom-mass.module').then( m => m.AtomMassPageModule)
  },
  {
    path: 'electron-configuration',
    loadChildren: () => import('./calculators/general-chem/electron-configuration/electron-configuration.module').then( m => m.ElectronConfigurationPageModule)
  },
  {
    path: 'electronegativity',
    loadChildren: () => import('./calculators/general-chem/electronegativity/electronegativity.module').then( m => m.ElectronegativityPageModule)
  },
  {
    path: 'chemical-name',
    loadChildren: () => import('./calculators/general-chem/chemical-name/chemical-name.module').then( m => m.ChemicalNamePageModule)
  },
  {
    path: 'pka',
    loadChildren: () => import('./calculators/general-chem/pka/pka.module').then( m => m.PkaPageModule)
  },
  {
    path: 'resuspension',
    loadChildren: () => import('./calculators/biochem/resuspension/resuspension.module').then( m => m.ResuspensionPageModule)
  },
  {
    path: 'protein-solubility',
    loadChildren: () => import('./calculators/biochem/protein-solubility/protein-solubility.module').then( m => m.ProteinSolubilityPageModule)
  },
  {
    path: 'michaelis-menten-equation',
    loadChildren: () => import('./calculators/biochem/michaelis-menten-equation/michaelis-menten-equation.module').then( m => m.MichaelisMentenEquationPageModule)
  },
  {
    path: 'enzyme-activity',
    loadChildren: () => import('./calculators/biochem/enzyme-activity/enzyme-activity.module').then( m => m.EnzymeActivityPageModule)
  },
  {
    path: 'isoelectric-point',
    loadChildren: () => import('./calculators/biochem/isoelectric-point/isoelectric-point.module').then( m => m.IsoelectricPointPageModule)
  },
  {
    path: 'chemlab-splash-screen',
    loadChildren: () => import('./chemlab-splash-screen/chemlab-splash-screen.module').then( m => m.ChemlabSplashScreenPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
