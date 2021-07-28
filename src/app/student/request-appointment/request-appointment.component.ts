import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-appointment',
  templateUrl: './request-appointment.component.html',
  styleUrls: ['./request-appointment.component.css']
})
export class RequestAppointmentComponent implements OnInit {
  reqForm!: FormGroup;
  loading = false;
  lecturers = ['Dr. Faruk Umar Ambursa', 'Dr.Khalid', "Mal. S M Tanimu"];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.reqForm = this.fb.group({
      Lecturer: ['', Validators.required],
      Date: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      Time: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    });
  }
  save(): any {
    console.log(this.reqForm);
    return false;
  }
}
