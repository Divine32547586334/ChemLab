import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {
  

  showGeneral: boolean = false;
  showBiochem: boolean = false;

  public appPages = [
    { title: 'Atom Mass', url: '/atom-mass', icon: '/assets/atom-mass.svg' },
    { title: 'Atom Name', url: '/atom-name', icon: '/assets/atom-name.svg' },
    { title: 'Chemical Name', url: '/chemical-name', icon: '/assets/chemical-name.svg' },
    { title: 'Electron Configuration', url: '/electron-configuration', icon: '/assets/electron-configuration.svg' },
    { title: 'Electronegativity', url: '/electronegativity', icon: '/assets/electronegativity.svg' },
    { title: 'Percent Composition', url: '/percent-composition', icon: '/assets/percent-composition.svg' },
    { title: 'Percent Ionic', url: '/percent-ionic', icon: '/assets/percent-ionic.svg' },
    { title: 'pKₐ', url: '/pka', icon: '/assets/pka.svg' },
    
  ];
  public appPages_second = [
    { title: 'Enzyme Activity', url: '/enzyme-activity', icon: '/assets/enzyme-activity.svg'},
    { title: 'Isoelectric Point', url: '/isoelectric-point', icon: '/assets/isoelectric-point.svg'},
    { title: 'Michaelis-Menten Equation', url: '/michaelis-menten-equation', icon: '/assets/mme.svg'},
    { title: 'Protein Solubility', url: '/protein-solubility', icon: '/assets/protein-solubility.svg'},
    { title: 'Resuspension', url: '/resuspension', icon: '/assets/resuspension.svg'},
    
  ];
  constructor(private menuCtrl: MenuController, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Disable the menu on login or starting page
        if (['/login', '/splash'].includes(event.url)) {
          this.menuCtrl.enable(false); // Disable the menu
        } else {
          this.menuCtrl.enable(true); // Enable the menu for other pages
        }
      }
    });
  }

  closeMenu() {
    this.menuCtrl.close('mainMenu');
  }
}

