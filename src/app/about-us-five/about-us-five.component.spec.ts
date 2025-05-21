import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsFiveComponent } from './about-us-five.component';

describe('AboutUsFiveComponent', () => {
  let component: AboutUsFiveComponent;
  let fixture: ComponentFixture<AboutUsFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsFiveComponent]
    });
    fixture = TestBed.createComponent(AboutUsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
