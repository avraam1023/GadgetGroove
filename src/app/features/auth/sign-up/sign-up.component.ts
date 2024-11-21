import { NgStyle } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgStyle],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private maxLenght: number = 16;

  signUpFomrs = this.formBuilder.group({
    firstName: [
      '',
      [Validators.required, Validators.maxLength(this.maxLenght)],
    ],
    lastName: ['', [Validators.required, Validators.maxLength(this.maxLenght)]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', Validators.required],
    phoneNumber: ['+995', [Validators.required, Validators.maxLength(13)]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    zipcode: ['Tbilisi', [Validators.required]],
    avatar: [
      'https://api.dicebear.com/8.x/lorelei/svg?seed=Felix',
      [Validators.required],
    ],
  });

  get controls() {
    return this.signUpFomrs.controls;
  }

  ngOnInit(): void {
    this.controls.confirmPassword.setValidators(
      this.confirmPasswordValidator(this.controls.password)
    );
    this.controls.password.valueChanges.subscribe(() =>
      this.controls.confirmPassword.updateValueAndValidity()
    );
  }

  onSignUp() {
    console.log(this.signUpFomrs.value);
  }

  confirmPasswordValidator(confirm: FormControl<string | null>): ValidatorFn {
    return (control: AbstractControl<string>): ValidationErrors | null => {
      return control.value === confirm.value
        ? null
        : { confirmPassword: 'Password do not match!' };
    };
  }
}
