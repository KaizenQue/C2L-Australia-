import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionOneComponent } from './meso-section-one.component';

describe('MesoSectionOneComponent', () => {
  let component: MesoSectionOneComponent;
  let fixture: ComponentFixture<MesoSectionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionOneComponent]
    });
    fixture = TestBed.createComponent(MesoSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
