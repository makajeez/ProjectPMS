import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loading = false;
  hide = true;
  hide1 = true;
  signupForm!: FormGroup;
  supervisors: any;

  constructor(private fb: FormBuilder,
              private route: Router,
              private toastr: ToastrService,
              private serve: AppService,
              private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: '',
      username: ['', [Validators.required]],
      password1: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.getSuper();
  }
  getSuper(): any{
    return this.http.get('https://project-pms.herokuapp.com/super').subscribe(data => {
      this.supervisors = data;
      console.log(data);
    });
  }
  signUp(): any {
    this.loading = true;
    const body = this.signupForm;
    return this.serve.signUp(body).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.toastr.success(`${body.get('username')?.value} Registered Successfully`, 'Success', {timeOut: 3000});
        this.route.navigate(['/login']);
      },
      error: (error: any) => {
        this.loading = false;
        if (error.status === 500) {
          this.route.navigate(['/login']);
          this.toastr.success(`${body.get('username')?.value} Registered Successfully`, 'Success', {timeOut: 3000});
        } else {
          this.toastr.error(`User ${body.get('username')?.value} Not Registered`, 'Error', {timeOut: 3000});
        }
      }
    });
    }
}
