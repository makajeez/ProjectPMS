import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-request-appointment',
  templateUrl: './request-appointment.component.html',
  styleUrls: ['./request-appointment.component.css']
})
export class RequestAppointmentComponent implements OnInit {
  reqForm!: FormGroup;
  loading = false;
  // supervisors = ['Dr. Faruk Umar Ambursa', 'Dr.Khalid', 'Mal. S M Tanimu'];

  constructor(
    private route: Router,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private serve: AppService
    ) {
  }

  ngOnInit(): void {
    this.reqForm = this.fb.group({
      date: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      time: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      student: this.serve.currentUser.username,
      supervisor: this.serve.currentUser.email,
      status: 'Pending'
    });
  }
  save(): any {
    this.serve.requestAppointment(this.reqForm).subscribe({
      next: (data: any) => {
        this.toastr.success(`Meeting Request Sent`, '', {timeOut: 3000});
        this.route.navigate(['/']);
      },
      error: (error: any) => {
        // this.toastr.error(`Upload Not Made`, 'Error', {timeOut: 3000});
        this.toastr.success(`There Was An Error While Processing Request`, '', {timeOut: 3000});
        // this.route.navigate(['/']);
      }
    });
  }
}
