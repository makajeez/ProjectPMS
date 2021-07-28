import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm!: FormGroup;
  apiUrl = 'http://127.0.0.1:8000/user/';
  users: any;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
    // private serve: SharedService
    ) { }

  ngOnInit(): any {
    this.loginForm = this.fb.group({
      RegistrationNo: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
    // this.auth();
  }

  login(): any {
    this.loading = true;
    const body = this.loginForm.value;
    // // console.log(body, this.users);
    // this.users.forEach((user: { RegistrationNo: any; Password: any; }) => {
    //   if (user?.RegistrationNo === body.get('RegistrationNo')?.value && user?.Password === body.get('Password')?.value) {
    //     this.loading = false;
    //     this.toastr.success('Logged In Successfully', 'Success', {timeOut: 3000});
    //     this.route.navigate(['']);
    //   } else if (user?.RegistrationNo !== body.get('RegistrationNo')?.value && user?.Password !== body.get('Password')?.value) {
    //     this.loading = false;
    //     this.toastr.error('Invalid Credentials', 'Error', {timeOut: 3000});
    //   }
    // });
    return this.http.post('http://127.0.0.1:8000/rest-auth', body).subscribe(data => {
      console.log(data);
    });

  }
  auth(): any{
    this.http.get(this.apiUrl).subscribe({
      next: data => {
      this.users = data;
      console.log(this.users);
      },
      error: error => {
       console.log(error);
      }
    });
  }
}
