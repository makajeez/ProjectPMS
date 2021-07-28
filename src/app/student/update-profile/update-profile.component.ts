import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { SharedService } from 'src/app/shared-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// declare let toastr: any;

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  readonly ApiUrl = 'http://127.0.0.1:8000/rest-auth/registration/';
  loading = false;
  hide = true;
  updateForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private route: Router,
              private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Phone: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      RegistrationNo: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      ProfilePics: [null, [Validators.required]]
    });
  }
  update(): any {
    this.loading = true;
  }
}
