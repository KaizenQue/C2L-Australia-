import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionThirdComponent } from './home-section-third.component';

describe('HomeSectionThirdComponent', () => {
  let component: HomeSectionThirdComponent;
  let fixture: ComponentFixture<HomeSectionThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSectionThirdComponent]
    });
    fixture = TestBed.createComponent(HomeSectionThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
