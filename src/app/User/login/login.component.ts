import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      reg_no: new FormControl(),
      pwd: new FormControl()
    });
  }

  login(): boolean {
    //this.route.navigate(['/signup']);
    console.log(this.loginForm);
    return false;
  }
}
