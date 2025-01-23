import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PkaPage } from './pka.page';

describe('PkaPage', () => {
  let component: PkaPage;
  let fixture: ComponentFixture<PkaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
