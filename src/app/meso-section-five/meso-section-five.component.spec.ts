import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionFiveComponent } from './meso-section-five.component';

describe('MesoSectionFiveComponent', () => {
  let component: MesoSectionFiveComponent;
  let fixture: ComponentFixture<MesoSectionFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionFiveComponent]
    });
    fixture = TestBed.createComponent(MesoSectionFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
