import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUSPageComponent } from './about-uspage.component';

describe('AboutUSPageComponent', () => {
  let component: AboutUSPageComponent;
  let fixture: ComponentFixture<AboutUSPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUSPageComponent]
    });
    fixture = TestBed.createComponent(AboutUSPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
