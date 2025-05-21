import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-submit-claim-form',
  templateUrl: './submit-claim-form.component.html',
  styleUrls: ['./submit-claim-form.component.css']
})
export class SubmitClaimFormComponent {
asbestosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.asbestosForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      stateLocation: ['', Validators.required],
      exposureType: ['', Validators.required],
      exposureLocation: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      additionalInfo: ['']
    });
  }

  onSubmit() {
    if (this.asbestosForm.valid) {
      console.log(this.asbestosForm.value);
      // Add your submission logic here
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.asbestosForm.controls).forEach(key => {
        this.asbestosForm.get(key)?.markAsTouched();
      });
    }
  }

  nextStep() {
    // Handle next step logic
    if (this.asbestosForm.valid) {
      console.log('Moving to next step with form data:', this.asbestosForm.value);
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.asbestosForm.controls).forEach(key => {
        this.asbestosForm.get(key)?.markAsTouched();
      });
    }
  }
}
