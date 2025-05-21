import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionEightComponent } from './meso-section-eight.component';

describe('MesoSectionEightComponent', () => {
  let component: MesoSectionEightComponent;
  let fixture: ComponentFixture<MesoSectionEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionEightComponent]
    });
    fixture = TestBed.createComponent(MesoSectionEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
