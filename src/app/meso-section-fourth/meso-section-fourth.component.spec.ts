import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionFourthComponent } from './meso-section-fourth.component';

describe('MesoSectionFourthComponent', () => {
  let component: MesoSectionFourthComponent;
  let fixture: ComponentFixture<MesoSectionFourthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionFourthComponent]
    });
    fixture = TestBed.createComponent(MesoSectionFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
