import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  students = ['Buhari Ahmed Alhassan', 'Khadija Mahmoud Falgore', 'Mubarak Daha Isa', 'Azeez Miudeen Owolabi']
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      Student: ['', Validators.required],
      Date: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      Time: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      Venue: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
