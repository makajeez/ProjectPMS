import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  hide = true;
  loginForm!: FormGroup;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private serve: AppService
    ) { }

  ngOnInit(): any {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login(): any {
    this.loading = true;
    return this.serve.login(this.loginForm).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.serve.isLoggedIn = true;
        this.serve.currentUser = data;
        this.toastr.success('Login Successful', 'Success', {timeOut: 3000});
        if (data.username.match(/^CST/i)) {
          this.route.navigate(['/']);
        }
        else {
          this.route.navigate(['/supervisor']);
        }
      },
      error: (error: any) => {
        this.loading = false;
        this.toastr.error(`Check your username or password`, 'Error', {timeOut: 2000});
      }
    });
  }
}





