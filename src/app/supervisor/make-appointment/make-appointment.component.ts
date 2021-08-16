import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  // students = ['Buhari Ahmed Alhassan', 'Khadija Mahmoud Falgore', 'Mubarak Daha Isa', 'Azeez Miudeen Owolabi'];
  students: any;
  loading = false;
  appointmentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private serve: AppService,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      student: ['', Validators.required],
      date: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      time: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      venue: ['', Validators.required],
      supervisor: this.serve.currentUser.email
    });
    this.getStudents();
  }
  getStudents(): any{
    this.http.get('https://project-pms.herokuapp.com/user/').subscribe({
      next: (data: any) => {
        this.students = data.filter((user: any) => user.email === this.serve.currentUser.email);
        return this.students;
        },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  sendInvite(): any{
    this.loading = true;
    return this.http.post('https://project-pms.herokuapp.com/invite/', JSON.stringify(this.appointmentForm.value)).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.toastr.success('Invitation Sent', 'Success', {timeOut: 3000});
        this.route.navigate(['/supervisor']);
      },
      error: (error: any) => {
        this.loading = false;
        this.toastr.error('An error occured, try again later', 'Error', {timeOut: 3000});
      }
    });
  }

}
