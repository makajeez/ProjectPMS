import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-completed-project',
  templateUrl: './upload-completed-project.component.html',
  styleUrls: ['./upload-completed-project.component.css']
})
export class UploadCompletedProjectComponent implements OnInit {
  projectForm!: FormGroup;
  date: Date = new Date();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      ProjectTitle: ['', Validators.required],
      Author: ['', Validators.required],
      Date: `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`,
      Supervisor: ['', Validators.required],
      File: ['', Validators.required]
    });
  }

}
