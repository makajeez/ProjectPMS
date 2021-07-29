import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import { SharedService } from 'src/app/shared-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// declare let toastr: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  readonly ApiUrl = 'http://127.0.0.1:8000/rest-auth/registration/';
  loading = false;
  hide = true;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private route: Router,
              private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      // entity: '' ,
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Phone: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      RegistrationNo: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      Photo: 'default.jpg',
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  signUp(): any {
    this.loading = true;
    const body = this.signupForm;
    return this.http.post(this.ApiUrl, JSON.stringify(body.value)).subscribe({
      next: data => {
        this.loading = false;
        this.toastr.success(`User ${body.get('RegistrationNo')?.value} Registered Successfully`, 'Success', {timeOut: 5000});
        this.route.navigate(['login']);
      },
      error: error => {
        this.loading = false;
        this.toastr.error(`User ${body.get('RegistrationNo')?.value} Not Registered`, 'Error', {timeOut: 5000});
      }
    });
    }
}
