import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionTenComponent } from './meso-section-ten.component';

describe('MesoSectionTenComponent', () => {
  let component: MesoSectionTenComponent;
  let fixture: ComponentFixture<MesoSectionTenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionTenComponent]
    });
    fixture = TestBed.createComponent(MesoSectionTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
