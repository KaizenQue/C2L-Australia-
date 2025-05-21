import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSevenComponent } from './about-us-seven.component';

describe('AboutUsSevenComponent', () => {
  let component: AboutUsSevenComponent;
  let fixture: ComponentFixture<AboutUsSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsSevenComponent]
    });
    fixture = TestBed.createComponent(AboutUsSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
