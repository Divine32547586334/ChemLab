import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercentIonicPage } from './percent-ionic.page';

describe('PercentIonicPage', () => {
  let component: PercentIonicPage;
  let fixture: ComponentFixture<PercentIonicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentIonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
