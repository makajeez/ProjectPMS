import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-upload-project-topics',
  templateUrl: './upload-project-topics.component.html',
  styleUrls: ['./upload-project-topics.component.css']
})
export class UploadProjectTopicsComponent implements OnInit {
  uploadTopicForm!: FormGroup;
  loading = false;
  supervisors: any;
  date: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.uploadTopicForm = this.fb.group({
      title: ['', Validators.required],
      supervisor: ['', Validators.required]
    });
    this.getSuper();
  }
  getSuper(): any {
    this.http.get('http://127.0.0.1:8000/super/').subscribe({
      next: (data: any) => {
        this.supervisors = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  logData(): any{
    this.loading = true;
    return this.http.post('http://127.0.0.1:8000/upload_topic/', JSON.stringify(this.uploadTopicForm.value)).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.toastr.success('Successfully Uploaded', 'Success', {timeOut: 3000});
        this.route.navigate(['/supervisor']);
      },
      error: (error: any) => {
        this.loading = false;
        this.toastr.error('An error occured, try again later', 'Error', {timeOut: 3000});
      }
    });
  }

}
