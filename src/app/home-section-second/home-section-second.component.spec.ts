import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionSecondComponent } from './home-section-second.component';

describe('HomeSectionSecondComponent', () => {
  let component: HomeSectionSecondComponent;
  let fixture: ComponentFixture<HomeSectionSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSectionSecondComponent]
    });
    fixture = TestBed.createComponent(HomeSectionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
