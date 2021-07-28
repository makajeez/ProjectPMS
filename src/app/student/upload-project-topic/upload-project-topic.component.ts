import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-project-topic',
  templateUrl: './upload-project-topic.component.html',
  styleUrls: ['./upload-project-topic.component.css']
})
export class UploadProjectTopicComponent implements OnInit {
  src = '';
  proposalForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.proposalForm = this.fb.group({
      Topic : ['', Validators.required],
      Abstract: '' // this.url
    });
  }
//   readUrl(event: any): void {
//     if (event.target.files && event.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (event: ProgressEvent) => {
//         this.url = (<FileReader>event.target).result;
//       }
//       reader.readAsDataURL(event.target.files[0]);
//     }
//   }
  readUrl(event: any): void{
    const file = this.proposalForm.get('Abstract')?.value.split('.');
    if (file[file.length - 1] === 'pdf') {
      this.src = 'assets/fileIcon/pdf.jpeg';
    }
    else if (file[file.length - 1] === 'doc' || 'docx') {
      this.src = 'assets/fileIcon/doc.jpeg';
    }
  }
}
