import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload-project-topic',
  templateUrl: './upload-project-topic.component.html',
  styleUrls: ['./upload-project-topic.component.css']
})
export class UploadProjectTopicComponent implements OnInit {
  proposalForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.proposalForm = this.fb.group({
      topic : this.buildTopic()
    });
  }
  buildTopic(): FormGroup {
    return this.fb.group({
        topic: ''
      });
  }
  getExt() {

  }
}
