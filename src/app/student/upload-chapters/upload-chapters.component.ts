import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-upload-chapters',
  templateUrl: './upload-chapters.component.html',
  styleUrls: ['./upload-chapters.component.css']
})
export class UploadChaptersComponent implements OnInit {
  ProjectChapterForm!: FormGroup;
  src = '';
  loading = false;
  supervisors = ['Dr. Faruk Umar Ambursa', 'Dr.Khalid', 'Mal. S M Tanimu'];
  chapters = ['Chapter One', 'Chapter Two', 'Chapter Three', 'Chapter Four', 'Chapter Five', 'All Chapters'];

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private serve: AppService,
    private toastr: ToastrService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.ProjectChapterForm = this.fb.group({
      chapter_number: ['', Validators.required],
      chapter_file: ['', Validators.required],
      supervisor: ['', Validators.required],
      student: this.serve.currentUser.username,
      status: 'Pending'
    });
  }

  onFileSelect(event: any): any{
    const file = this.ProjectChapterForm.get('chapter_file')?.value.split('.');
    if (file[file.length - 1] === 'pdf') {
      this.src = 'assets/fileIcon/pdf.jpeg';
    }
    else if (file[file.length - 1] === 'doc' || 'docx') {
      this.src = 'assets/fileIcon/doc.jpeg';
    }
    if (event.target.files.length > 0) {
      const chapterFile = event.target.files[0];
      this.ProjectChapterForm.get('chapter_file')?.setValue(chapterFile);
    }
  }

  publish(): any {
    this.loading = true;
    const formData = new FormData();

    formData.append('chapter_number', this.ProjectChapterForm.get('chapter_number')?.value);
    formData.append('chapter_file', this.ProjectChapterForm.get('chapter_file')?.value);
    formData.append('supervisor', this.ProjectChapterForm.get('supervisor')?.value);
    formData.append('student', this.ProjectChapterForm.get('student')?.value);
    formData.append('status', this.ProjectChapterForm.get('status')?.value);

    return this.http.post(`${this.serve.api}/chapter/`, formData).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.toastr.success('Uploaded Successfully', 'Success', {timeOut: 3000});
        this.route.navigate(['']);
      },
      error: (error: { message: any; }) => {
        this.loading = false;
        this.toastr.error(`${error}`, '', {timeOut: 3000});
        this.route.navigate(['']);
      }
    });
  }
}
