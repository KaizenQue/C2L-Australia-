import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionSixComponent } from './meso-section-six.component';

describe('MesoSectionSixComponent', () => {
  let component: MesoSectionSixComponent;
  let fixture: ComponentFixture<MesoSectionSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionSixComponent]
    });
    fixture = TestBed.createComponent(MesoSectionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
