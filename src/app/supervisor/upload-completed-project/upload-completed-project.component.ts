import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-upload-completed-project',
  templateUrl: './upload-completed-project.component.html',
  styleUrls: ['./upload-completed-project.component.css']
})
export class UploadCompletedProjectComponent implements OnInit {
  src: any;
  projectForm!: FormGroup;
  loading = false;
  supervisors: any;
  years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private toastr: ToastrService,
    private serve: AppService
    ) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      project_title: ['', Validators.required],
      student: ['', Validators.required],
      year: ['', Validators.required],
      supervisor: ['', Validators.required],
      project_file: ['', Validators.required]
    });
    this.getSuper();
  }

  readUrl(event: any): any{
    if (event.target.files.length > 0) {
      const proFile = event.target.files[0];
      this.projectForm.get('project_file')?.setValue(proFile);
    }
    const file = this.projectForm.get('project_file')?.value.split('.');
    if (file[file.length - 1] === 'pdf') {
      this.src = 'assets/fileIcon/pdf.jpeg';
    }
    else if (file[file.length - 1] === 'doc' || 'docx') {
      this.src = 'assets/fileIcon/doc.jpeg';
    }
  }
  getSuper(): any {
    this.http.get('https://project-pms.herokuapp.com/super/').subscribe({
      next: (data: any) => {
        this.supervisors = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  submit(): any{
    this.loading = true;
    const formData = new FormData();

    formData.append('student', this.projectForm.get('student')?.value);
    formData.append('project_title', this.projectForm.get('project_title')?.value);
    formData.append('project_file', this.projectForm.get('project_file')?.value);
    formData.append('year', this.projectForm.get('year')?.value);
    formData.append('supervisor', this.projectForm.get('supervisor')?.value);

    return this.http.post(`${this.serve.api}/project/`, formData).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.toastr.success(`Project Uploaded Successfully`, 'Success', {timeOut: 2000});
        this.route.navigate(['/supervisor']);
      },
      error: (error: any) => {
        this.loading = false;
        this.toastr.error(`Project Upload Failed \n
        That's All we know`, 'Error', {timeOut: 2000});
      }
    });
  }

}
