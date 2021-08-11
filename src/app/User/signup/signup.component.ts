import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
// import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
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
  loading = false;
  hide = true;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private route: Router,
              private toastr: ToastrService,
              private serve: AppService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      password1: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  signUp(): any {
    this.loading = true;
    const body = this.signupForm;
    return this.serve.signUp(body).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.toastr.success(`User ${body.get('username')?.value} Registered Successfully`, 'Success', {timeOut: 5000});
        this.route.navigate(['/login']);
      },
      error: (error: any) => {
        this.loading = false;
        this.toastr.error(`User ${body.get('username')?.value} Not Registered`, 'Error', {timeOut: 5000});
      }
    });
    }
}
