import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-project-topics',
  templateUrl: './upload-project-topics.component.html',
  styleUrls: ['./upload-project-topics.component.css']
})
export class UploadProjectTopicsComponent implements OnInit {
  uploadTopicForm!: FormGroup;
  date: Date = new Date();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.uploadTopicForm = this.fb.group({
      Title: ['', Validators.required],
      SubmittedBy: ['', Validators.required],
      Date: `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`
    });
  }
  logData(): void {
    console.log(this.uploadTopicForm.value);
  }

}
