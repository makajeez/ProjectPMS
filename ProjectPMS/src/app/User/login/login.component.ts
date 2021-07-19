import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { SharedService } from 'src/app/shared-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm!: FormGroup;
  apiUrl = 'http://127.0.0.1:8000/signup/';
  users: User[] = [];

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    // private serve: SharedService
    ) { }

  ngOnInit(): any {
    this.loginForm = this.fb.group({
      RegistrationNo: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.auth();
  }

  login(): void {
    this.loading = !this.loading;
    const body = this.loginForm;
    console.log(body);

  }
  auth(): any{
    this.http.get(this.apiUrl).subscribe(data => {
    console.log(data);
    });
  }
}
