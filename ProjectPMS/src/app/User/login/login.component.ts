import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  users = [];

  constructor(private route: Router, private fb: FormBuilder, private serve: SharedService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      reg_no: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      pwd: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  login(): void {
    console.log(this.loginForm);

  }
}
