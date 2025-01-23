import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MichaelisMentenEquationPage } from './michaelis-menten-equation.page';

describe('MichaelisMentenEquationPage', () => {
  let component: MichaelisMentenEquationPage;
  let fixture: ComponentFixture<MichaelisMentenEquationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MichaelisMentenEquationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
