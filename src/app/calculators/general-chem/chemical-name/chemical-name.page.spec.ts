import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChemicalNamePage } from './chemical-name.page';

describe('ChemicalNamePage', () => {
  let component: ChemicalNamePage;
  let fixture: ComponentFixture<ChemicalNamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
