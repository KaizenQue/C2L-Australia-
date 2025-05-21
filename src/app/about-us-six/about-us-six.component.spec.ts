import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSixComponent } from './about-us-six.component';

describe('AboutUsSixComponent', () => {
  let component: AboutUsSixComponent;
  let fixture: ComponentFixture<AboutUsSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsSixComponent]
    });
    fixture = TestBed.createComponent(AboutUsSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
