import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-chapters',
  templateUrl: './upload-chapters.component.html',
  styleUrls: ['./upload-chapters.component.css']
})
export class UploadChaptersComponent implements OnInit {
  readonly ApiUrl = '127.0.0.1:8000';
  ProjectChapterForm!: FormGroup;
  src = '';
  loading = false;
  supervisors = ['Dr. Faruk Umar Ambursa', 'Dr.Khalid', 'Mal. S M Tanimu'];
  chapters = ['Chapter One', 'Chapter Two', 'Chapter Three', 'Chapter Four', 'Chapter Five'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.ProjectChapterForm = this.fb.group({
      ChapterNumber: ['', Validators.required],
      Supervisor: ['', Validators.required],
      ChapterFile: [null, Validators.required],
      Status: 'pending'
    });
  }

  readUrl(event: any): void{
    const file = this.ProjectChapterForm.get('ChapterFile')?.value.split('.');
    if (file[file.length - 1] === 'pdf') {
      this.src = 'assets/fileIcon/pdf.jpeg';
    }
    else if (file[file.length - 1] === 'doc' || 'docx') {
      this.src = 'assets/fileIcon/doc.jpeg';
    }
  }
  publish(): any {
    this.loading = true;
    return this.http.post(this.ApiUrl, JSON.stringify(this.ProjectChapterForm.value)).subscribe({
      next: data => {
      this.loading = false;
      console.log(data);
      this.route.navigate(['']);
      },
      error: error => {
        this.loading = false;
        console.log(error.message);
      }
    });
  }
}
