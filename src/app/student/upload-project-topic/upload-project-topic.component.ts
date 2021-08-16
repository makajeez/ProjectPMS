import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-upload-project-topic',
  templateUrl: './upload-project-topic.component.html',
  styleUrls: ['./upload-project-topic.component.css']
})
export class UploadProjectTopicComponent implements OnInit {
  src = '';
  loading = false;
  // supervisors = [
  //   {
  //     username: 'Dr. Faruk Umar Ambursa',
  //     id: 1
  //   },
  //   {
  //     username: 'Dr.Khalid',
  //     id: 2
  //   },
  //   {
  //     username: 'Mal. S M Tanimu',
  //     id: 3
  //   }
  // ];
  proposalForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private serve: AppService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.proposalForm = this.fb.group({
      supervisor: this.serve.currentUser.email,
      proposal_title: ['', Validators.required],
      proposal_file: '',
      student: this.serve.currentUser.username,
      status: 'Pending'
    });
  }

  submit(): any{
    this.loading = true;
    const formData = new FormData();

    formData.append('proposal_title', this.proposalForm.get('proposal_title')?.value);
    formData.append('proposal_file', this.proposalForm.get('proposal_file')?.value);
    formData.append('supervisor', this.proposalForm.get('supervisor')?.value);
    formData.append('student', this.proposalForm.get('student')?.value);
    formData.append('status', this.proposalForm.get('status')?.value);

    return this.http.post(`${this.serve.api}/proposal/`, formData).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.toastr.success(`Proposal Uploaded Successfully`, 'Success', {timeOut: 2000});
        this.route.navigate(['/']);
      },
      error: (error: any) => {
        this.loading = false;
        this.toastr.error(`Proposal Upload Failed \n
        That's All we know`, 'Error', {timeOut: 2000});
      }
    });
  }

  readUrl(event: any): void{
    const file = this.proposalForm.get('proposal_file')?.value.split('.');
    if (file[file.length - 1] === 'pdf') {
      this.src = 'assets/fileIcon/pdf.jpeg';
    }
    else if (file[file.length - 1] === 'doc' || 'docx') {
      this.src = 'assets/fileIcon/doc.jpeg';
    }
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.proposalForm.get('proposal_file')?.setValue(file);
    }
  }
}
