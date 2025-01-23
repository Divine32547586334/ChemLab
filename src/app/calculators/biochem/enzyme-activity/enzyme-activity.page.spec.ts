import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnzymeActivityPage } from './enzyme-activity.page';

describe('EnzymeActivityPage', () => {
  let component: EnzymeActivityPage;
  let fixture: ComponentFixture<EnzymeActivityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnzymeActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
