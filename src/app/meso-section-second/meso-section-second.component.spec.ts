import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionSecondComponent } from './meso-section-second.component';

describe('MesoSectionSecondComponent', () => {
  let component: MesoSectionSecondComponent;
  let fixture: ComponentFixture<MesoSectionSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionSecondComponent]
    });
    fixture = TestBed.createComponent(MesoSectionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
