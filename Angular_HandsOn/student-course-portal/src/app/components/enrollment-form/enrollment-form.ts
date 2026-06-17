import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enrollment-form.html',
  styleUrls: ['./enrollment-form.css']
})
export class EnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Reactive Form Group Structure Initialization via FormBuilder
    this.enrollForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      // Custom Domain Validator applied along with standard Email validation
      email: ['', [Validators.required, Validators.email, this.corporateEmailValidator]],
      courseCode: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      // FormArray for dynamic input elements (Hands-On 5 Core Requirement)
      prerequisites: this.fb.array([])
    });
  }

  // Getter for easy access to dynamic array inputs inside the template
  get prerequisitesArray(): FormArray {
    return this.enrollForm.get('prerequisites') as FormArray;
  }

  // Method to programmatically append new fields to the FormArray
  addPrerequisite(): void {
    this.prerequisitesArray.push(this.fb.control('', Validators.required));
  }

  // Method to remove a specific item from the FormArray
  removePrerequisite(index: number): void {
    this.prerequisitesArray.removeAt(index);
  }

  // Custom Validator Logic (Task 2 Spec)
  corporateEmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value as string;
    if (email && !email.toLowerCase().endsWith('.edu') && !email.toLowerCase().endsWith('.com')) {
      return { invalidDomain: true }; // Custom error token returned
    }
    return null; // Valid state
  }

  onFormSubmit(): void {
    if (this.enrollForm.valid) {
      this.isSubmitted = true;
      console.log('Reactive Form Structure Dispatched Successfully:', this.enrollForm.value);
    } else {
      this.enrollForm.markAllAsTouched(); // Trigger validation highlights across view
    }
  }

  resetForm(): void {
    this.enrollForm.reset();
    this.prerequisitesArray.clear();
    this.isSubmitted = false;
  }
}