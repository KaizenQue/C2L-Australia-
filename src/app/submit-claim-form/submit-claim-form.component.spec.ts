import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitClaimFormComponent } from './submit-claim-form.component';

describe('SubmitClaimFormComponent', () => {
  let component: SubmitClaimFormComponent;
  let fixture: ComponentFixture<SubmitClaimFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitClaimFormComponent]
    });
    fixture = TestBed.createComponent(SubmitClaimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
