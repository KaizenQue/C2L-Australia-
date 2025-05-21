import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header-about-us',
  templateUrl: './header-about-us.component.html',
  styleUrls: ['./header-about-us.component.css']
})
export class HeaderAboutUsComponent {
 isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  asbestosForm: FormGroup;
  
    constructor(private fb: FormBuilder, private router: Router) {
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
       
      }
    }
  
    nextStep() {
      if (this.asbestosForm.valid) {
        console.log('Form is valid. Navigating to ContactUsHomeComponent...');
        this.router.navigate(['/ContactUsHomeComponent']); // Ensure the path is correct
      } else {
        console.log('Form is invalid. Marking fields as touched...');
        Object.keys(this.asbestosForm.controls).forEach(key => {
          this.asbestosForm.get(key)?.markAsTouched();
        });
      }
    }
}
