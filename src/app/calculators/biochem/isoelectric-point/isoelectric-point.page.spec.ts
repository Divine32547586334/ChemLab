import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsoelectricPointPage } from './isoelectric-point.page';

describe('IsoelectricPointPage', () => {
  let component: IsoelectricPointPage;
  let fixture: ComponentFixture<IsoelectricPointPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoelectricPointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
