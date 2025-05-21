import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionThirdComponent } from './meso-section-third.component';

describe('MesoSectionThirdComponent', () => {
  let component: MesoSectionThirdComponent;
  let fixture: ComponentFixture<MesoSectionThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionThirdComponent]
    });
    fixture = TestBed.createComponent(MesoSectionThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
