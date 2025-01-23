import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronConfigurationPage } from './electron-configuration.page';

describe('ElectronConfigurationPage', () => {
  let component: ElectronConfigurationPage;
  let fixture: ComponentFixture<ElectronConfigurationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronConfigurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
