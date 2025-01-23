import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercentCompositionPage } from './percent-composition.page';

describe('PercentCompositionPage', () => {
  let component: PercentCompositionPage;
  let fixture: ComponentFixture<PercentCompositionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentCompositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
