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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.reqForm = this.fb.group({
      picker : [null, Validators.required],
      time : ['', Validators.required]
    });
  }
  save(): any {
    console.log(this.reqForm);
    return false;
  }
}
