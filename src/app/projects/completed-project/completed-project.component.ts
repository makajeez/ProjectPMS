import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectTopicsComponent } from '../project-topics/project-topics.component';

@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {
  projects: any;
  project = [
    {
      author: 'Usman Shehu Gezawa',
      topic: 'Design and implementation of an Image Recognition System',
      supervisor: 'Malam Saminu Muhammad',
      fileUrl: 'failFast.pdf',
      uploadDate: '9/23/2013',
    },
    {
      author: 'Mubarak Daha Isa',
      topic: ' Desgin and Implementation of an Image Recognition System',
      supervisor: 'Malam Abba Datti',
      fileUrl: 'failFast.pdf',
      uploadDate: '9/23/2013',
    },
    {
      author: 'Ibrahim Abdullahi Aliyu',
      topic: 'Image Recognition System',
      supervisor: 'Malam Sagir Tanimu',
      fileUrl: 'failFast.pdf',
      uploadDate: '9/23/2013',
    },
    {
      author: 'Usman Tugga',
      topic: 'Online shopping pllatform',
      supervisor: 'Dr. F U Ambursa',
      fileUrl: 'failFast.pdf',
      uploadDate: '9/23/2013',
    },
    {
      author: 'Buhari Ahmed Alhassan',
      topic: 'Image Recognition System',
      supervisor: 'Saminu Muhammad',
      fileUrl: 'failFast.pdf',
      uploadDate: '9/23/2013',
    },
  ];

  constructor(private http: HttpClient) { }
  url = 'http://127.0.0.1:8000';
  ngOnInit(): void {
    this.getProject();
  }

  getProject(): any{
    return this.http.get(`${this.url}/project/`).subscribe((data: any) => {
      this.projects = data;
      console.log(data);
    });
  }

}
