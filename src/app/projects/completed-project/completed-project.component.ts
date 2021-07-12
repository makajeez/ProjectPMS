import { Component, OnInit } from '@angular/core';
import { ProjectTopicsComponent } from '../project-topics/project-topics.component';

@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {
  tHeads = ['S/N', 'Project Title', 'Author', 'Date', 'Supervisor', 'downloads'];

  projects = [
    {
      author: 'Usman Shehu Gezawa',
      topic: 'Design and implementation of an Image Recognition System',
      supervisor: 'Saminu Muhammad',
      fileUrl: '../assets/faiFast.pdf',
      uploadDate: '9/23/2013',
    },
    {
      author: 'Usman Shehu Gezawa',
      topic: 'Image Recognition System',
      supervisor: 'Saminu Muhammad',
      fileUrl: '../assets/faiFast.pdf',
      uploadDate: '9/23/2013',
    },
    {
      author: 'Usman Shehu Gezawa',
      topic: 'Image Recognition System',
      supervisor: 'Saminu Muhammad',
      fileUrl: '../assets/faiFast.pdf',
      uploadDate: '9/23/2013',
    },
    {
      author: 'Usman Shehu Gezawa',
      topic: 'Image Recognition System',
      supervisor: 'Saminu Muhammad',
      fileUrl: '../assets/faiFast.pdf',
      uploadDate: '9/23/2013',
    },
    {
      author: 'Usman Shehu Gezawa',
      topic: 'Image Recognition System',
      supervisor: 'Saminu Muhammad',
      fileUrl: '../assets/faiFast.pdf',
      uploadDate: '9/23/2013',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
