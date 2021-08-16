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

  constructor(private http: HttpClient) { }
  url = 'https://project-pms.herokuapp.com';
  ngOnInit(): void {
    this.getProject();
  }

  getProject(): any{
    return this.http.get(`${this.url}/project/`).subscribe((data: any) => {
      this.projects = data;
      // console.log(data);
    });
  }

}
