import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtomMassPage } from './atom-mass.page';

describe('AtomMassPage', () => {
  let component: AtomMassPage;
  let fixture: ComponentFixture<AtomMassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomMassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
