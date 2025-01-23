import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-michaelis-menten-equation',
  templateUrl: './michaelis-menten-equation.page.html',
  styleUrls: ['./michaelis-menten-equation.page.scss'],
})
export class MichaelisMentenEquationPage implements OnInit {
  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
  // Unit arrays for conversions
  units = [
    { name: 'Molar', symbol: 'M', factor: 1 },
    { name: 'Millimolar', symbol: 'mM', factor: 1000 },
    { name: 'Micromolar', symbol: 'µM', factor: 1_000_000 },
    { name: 'Nanomolar', symbol: 'nM', factor: 1_000_000_000 }
  ];

  vmaxUnits = [
    { name: 'Per second', symbol: '/s', factor: 1 },
    { name: 'Per minute', symbol: '/min', factor: 60 }
  ];

  vUnits = [
    { name: 'Second', symbol: 'sec', factor: 1 },
    { name: 'Minute', symbol: 'min', factor: 60 }
  ];

  // Selected units
  selectedUnit: string = 'M';
  selectedVmaxUnit: string = '/s';
  selectedSUnit: string = 'M';
  selectedVUnit: string = 'sec';

  // Input values for calculations
  originalValue: number = NaN;
  displayedInput: number = NaN;

  vmaxOriginalValue: number = NaN;
  displayedVmaxInput: number = NaN;

  sOriginalValue: number = NaN;
  displayedSInput: number = NaN;

  vOriginalValue: number = NaN;
  displayedVInput: number = NaN;

  constructor() {}

  ngOnInit() {
    this.updateDisplayedInput();
    this.updateDisplayedVmaxInput();
    this.updateDisplayedSInput();
    this.updateDisplayedVInput();
  }

  // Conversion helper
  getConversionFactor(unitsArray: any[], selectedUnit: string): number {
    const unit = unitsArray.find((u) => u.symbol === selectedUnit);
    return unit ? unit.factor : 1;
  }

  // Recalculate and update all values when inputs change
  recalculateAllValues() {
    const baseKm = this.originalValue / this.getConversionFactor(this.units, this.selectedUnit);
    const baseVmax = this.vmaxOriginalValue / this.getConversionFactor(this.vmaxUnits, this.selectedVmaxUnit);
    const baseS = this.sOriginalValue / this.getConversionFactor(this.units, this.selectedSUnit);

    // Calculate Reaction rate (V) and update
    this.vOriginalValue = (baseVmax * baseS) / (baseKm + baseS);
    this.displayedVInput = this.vOriginalValue * this.getConversionFactor(this.vUnits, this.selectedVUnit);
  }

  // Handle input changes for Normality
  onInputChangeForNormality(value: any) {
    this.originalValue = value;
    this.recalculateAllValues();
  }

  // Handle input changes for Vmax
  onInputChangeForVmax(value: any) {
    this.vmaxOriginalValue = value;
    this.recalculateAllValues();
  }

  // Handle input changes for Substrate concentration
  onInputChangeForSubstrate(value: any) {
    this.sOriginalValue = value;
    this.recalculateAllValues();
  }

  // Handle input changes for Reaction rate
  onInputChangeForReactionRate(value: any) {
    this.vOriginalValue = value;
    this.recalculateAllValues();
  }

  // Update displayed values when unit is changed
  updateDisplayedInput() {
    this.displayedInput = this.originalValue / this.getConversionFactor(this.units, this.selectedUnit);
  }

  updateDisplayedVmaxInput() {
    this.displayedVmaxInput = this.vmaxOriginalValue / this.getConversionFactor(this.vmaxUnits, this.selectedVmaxUnit);
  }

  updateDisplayedSInput() {
    this.displayedSInput = this.sOriginalValue / this.getConversionFactor(this.units, this.selectedSUnit);
  }

  updateDisplayedVInput() {
    this.displayedVInput = this.vOriginalValue / this.getConversionFactor(this.vUnits, this.selectedVUnit);
  }

  clearAll() {
    window.location.reload();
  }
  
}
