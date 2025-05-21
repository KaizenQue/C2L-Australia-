import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoSectionNineComponent } from './meso-section-nine.component';

describe('MesoSectionNineComponent', () => {
  let component: MesoSectionNineComponent;
  let fixture: ComponentFixture<MesoSectionNineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoSectionNineComponent]
    });
    fixture = TestBed.createComponent(MesoSectionNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
