import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesothelimoPageComponent } from './mesothelimo-page.component';

describe('MesothelimoPageComponent', () => {
  let component: MesothelimoPageComponent;
  let fixture: ComponentFixture<MesothelimoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesothelimoPageComponent]
    });
    fixture = TestBed.createComponent(MesothelimoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
