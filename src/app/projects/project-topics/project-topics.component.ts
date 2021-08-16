import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-topics',
  templateUrl: './project-topics.component.html',
  styleUrls: ['./project-topics.component.css']
})
export class ProjectTopicsComponent implements OnInit {
  topics: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): any{
    return this.http.get('https://project-pms.herokuapp.com/upload_topic/').subscribe((data: any) => {
      this.topics = data;
    });
  }
}
