import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import { SharedService } from 'src/app/shared-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  readonly ApiUrl = 'http://127.0.0.1:8000/signup/';
  loading = false;
  hide = true;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private route: Router
    ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      // entity: '' ,
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Phone: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      RegistrationNo: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  signUp(): any {
    this.loading = true;
    const val = this.signupForm.value;
    return this.http.post(this.ApiUrl, JSON.stringify(val)).subscribe({
      next: data => {
      this.loading = false;
      this.route.navigate(['login']);
      },
      error: error => {
        this.loading = false;
        console.log(error.message);
      }
    });
  }
}
