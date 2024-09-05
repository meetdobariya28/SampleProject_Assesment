import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private navService: NavigationService) {//Injecting navService through DI

    this.userForm = this.fb.group({ // Form Validators using formBuilder and formGroup
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      streetAddressLine2:  [''],
      city: ['', Validators.required],
      stateProvince: ['', Validators.required],
      country: ['', Validators.required],
      postalZipCode: ['', [Validators.required, Validators.pattern(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/)]] //Postal Regex for Canada only
    });
  }

  onSubmit() { //Submit button
    if (this.userForm.valid) {
      this.navService.submitUser(this.userForm.value).subscribe(
        (response) => {
          this.successMessage = 'Thank you! Your submission was successful.';
          this.errorMessage = '';
          this.userForm.reset();  // Clear the form after successful submission
        },
        (error) => {
          this.errorMessage = 'Something went wrong. Please try again.';
          this.successMessage = '';
        }
      );
    }
  }
}
