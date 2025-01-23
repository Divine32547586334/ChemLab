import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChemlabSplashScreenPage } from './chemlab-splash-screen.page';

describe('ChemlabSplashScreenPage', () => {
  let component: ChemlabSplashScreenPage;
  let fixture: ComponentFixture<ChemlabSplashScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemlabSplashScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
