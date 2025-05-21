import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderdemoComponent } from './sliderdemo.component';

describe('SliderdemoComponent', () => {
  let component: SliderdemoComponent;
  let fixture: ComponentFixture<SliderdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderdemoComponent]
    });
    fixture = TestBed.createComponent(SliderdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
