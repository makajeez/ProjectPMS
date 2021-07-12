import { Component, OnInit } from '@angular/core';
// import { UserModel } from '../shared/user.model.ts';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  entities = ['Student', 'Project Supervisor', 'Project Coordinator'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      entity: '',
      fName: ['', [Validators.required, Validators.minLength(3)]],
      lName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      reg_no: '',
      pwGroup: this.fb.group({
        pw1: ['', [Validators.required, Validators.minLength(8)]],
        pw2: ['', [Validators.required]],
      })
    });
  }

  eListener(entityName: any): void {
    if (entityName.value === 'Student') {
      this.signupForm.get('reg_no')?.setValidators([Validators.required]);
      this.signupForm.get('reg_no')?.updateValueAndValidity();
    }
    this.signupForm.get('reg_no')?.setValidators([]);
    this.signupForm.get('reg_no')?.updateValueAndValidity();
  }
  signUp(): void {
    console.log(this.signupForm);
  }
}
