import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enzyme-activity',
  templateUrl: './enzyme-activity.page.html',
  styleUrls: ['./enzyme-activity.page.scss'],
})
export class EnzymeActivityPage implements OnInit {
  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
  // Arrays for unit options and conversion factors
  volumeUnits = [
    { label: 'Microliter (μL)', value: 'μL', factor: 0.001 },
    { label: 'Milliliter (mL)', value: 'mL', factor: 1 },
    { label: 'Centiliter (cL)', value: 'cL', factor: 10 },
    { label: 'Liter (L)', value: 'L', factor: 1000 },
  ];

  massUnits = [
    { label: 'Microgram (μg)', value: 'μg', factor: 0.001 },
    { label: 'Milligram (mg)', value: 'mg', factor: 1 },
    { label: 'Decigram (dg)', value: 'dg', factor: 10 },
    { label: 'Gram (g)', value: 'g', factor: 1000 },
    { label: 'Decagram (dag)', value: 'dag', factor: 10000 },
    { label: 'Kilogram (kg)', value: 'kg', factor: 1000000 },
  ];

  // Variables to store the inputs and selected units
  selectedUnit: string = 'mL'; // Desired enzyme activity
  originalInput: number = NaN;
  displayedInput: number = NaN;

  selectedMassUnit: string = 'mg'; // Stock enzyme activity
  originalMassInput: number = NaN;
  displayedMassInput: number = NaN;

  selectedFinalVolumeUnit: string = 'mL'; // Desired final volume
  originalFinalVolumeInput: number = NaN;
  displayedFinalVolumeInput: number = NaN;

  selectedEnzymeMassUnit: string = 'mg'; // Enzyme mass
  originalEnzymeMassInput: number = NaN;
  displayedEnzymeMassInput: number = NaN;

  constructor() {}

  ngOnInit() {
    // Initialize the displayed inputs
    this.updateDisplayedInput();
    this.updateDisplayedMassInput();
    this.updateDisplayedFinalVolumeInput();
    this.updateDisplayedEnzymeMassInput();
  }

  // Helper to get conversion factor
  getConversionFactor(unitsArray: any[], selectedUnit: string): number {
    const unit = unitsArray.find((u) => u.value === selectedUnit);
    return unit ? unit.factor : 1;
  }

  // Recalculate the enzyme mass when inputs change
  recalculateEnzymeMass() {
    // Convert inputs to base units first (before the calculation)
    const baseDesiredEnzymeActivity = this.originalInput / this.getConversionFactor(this.volumeUnits, this.selectedUnit);
    const baseStockEnzymeActivity = this.originalMassInput / this.getConversionFactor(this.massUnits, this.selectedMassUnit);
    const baseDesiredFinalVolume = this.originalFinalVolumeInput / this.getConversionFactor(this.volumeUnits, this.selectedFinalVolumeUnit);

    // Enzyme mass calculation using the formula provided
    const enzymeMass = (baseDesiredEnzymeActivity * baseDesiredFinalVolume) / baseStockEnzymeActivity;

    // Update the enzyme mass value
    this.originalEnzymeMassInput = enzymeMass;
    this.updateDisplayedEnzymeMassInput();
  }

  // Handle input changes and recalculate enzyme mass
  onInputChange() {
    this.recalculateEnzymeMass();
  }

  // Handle changes in Desired Enzyme Activity
  recalculateFromDesiredEnzymeActivity(value: any) {
    this.originalInput = value;
    this.recalculateEnzymeMass();
  }

  // Handle changes in Stock Enzyme Activity
  recalculateFromStockEnzymeActivity(value: any) {
    this.originalMassInput = value;
    this.recalculateEnzymeMass();
  }

  // Handle changes in Desired Final Volume
  recalculateFromDesiredFinalVolume(value: any) {
    this.originalFinalVolumeInput = value;
    this.recalculateEnzymeMass();
  }

  // Handle changes in Enzyme Mass
  recalculateFromEnzymeMass(value: any) {
    this.originalEnzymeMassInput = value;
    this.recalculateEnzymeMass();
  }

  // Update displayed values for each input field when unit is changed (no calculation)
  updateDisplayedInput() {
    this.displayedInput = this.originalInput / this.getConversionFactor(this.volumeUnits, this.selectedUnit);
  }

  updateDisplayedMassInput() {
    this.displayedMassInput = this.originalMassInput / this.getConversionFactor(this.massUnits, this.selectedMassUnit);
  }

  updateDisplayedFinalVolumeInput() {
    this.displayedFinalVolumeInput = this.originalFinalVolumeInput / this.getConversionFactor(this.volumeUnits, this.selectedFinalVolumeUnit);
  }

  updateDisplayedEnzymeMassInput() {
    this.displayedEnzymeMassInput = this.originalEnzymeMassInput / this.getConversionFactor(this.massUnits, this.selectedEnzymeMassUnit);
  }


  clearAllInputs() {
    window.location.reload();
  }
}
