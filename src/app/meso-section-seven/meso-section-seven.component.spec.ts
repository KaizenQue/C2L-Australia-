import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionSevenComponent } from './meso-section-seven.component';

describe('MesoSectionSevenComponent', () => {
  let component: MesoSectionSevenComponent;
  let fixture: ComponentFixture<MesoSectionSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionSevenComponent]
    });
    fixture = TestBed.createComponent(MesoSectionSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
