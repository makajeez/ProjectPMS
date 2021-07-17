import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
// import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared-service';
import { HttpClient } from '@angular/common/http';

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

  // entities = ['Student', 'Project Supervisor', 'Project Coordinator'];

  constructor(private fb: FormBuilder,private http: HttpClient, private service: SharedService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      // entity: '' ,
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      RegistrationNo: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  signUp(): any {
    // const val = this.signupForm.value;
    let val = this.signupForm.value;
    console.log(val);
    
    return this.http.post(this.ApiUrl, JSON.stringify(val));
    // this.service.registerUser(val) //.subscribe(res: any => 
      //alert(res.toString())
     // );
  }
}
