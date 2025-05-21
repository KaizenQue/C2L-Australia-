import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsFourComponent } from './about-us-four.component';

describe('AboutUsFourComponent', () => {
  let component: AboutUsFourComponent;
  let fixture: ComponentFixture<AboutUsFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsFourComponent]
    });
    fixture = TestBed.createComponent(AboutUsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
