import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-topics',
  templateUrl: './project-topics.component.html',
  styleUrls: ['./project-topics.component.css']
})
export class ProjectTopicsComponent implements OnInit {
  topics: any;
  topic = [
    {
      topic: 'Desgin and Implementation of an Automotive system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    },
    {
      topic: 'Design and implementation of an E-coomerce website',
      supervisor: 'Malam Saminu',
      date: '09/24/2009'
    },
    {
      topic: 'Design and implementation of an E-coomerce website',
      supervisor: 'Malam Sagir',
      date: '09/24/2009'
    },
    {
      topic: 'Design and implementation of an image recognition system',
      supervisor: 'Dr F U Ambursa',
      date: '09/24/2009'
    },
    {
      topic: 'Automotive system',
      supervisor: 'Malam Abu Ismail',
      date: '09/24/2009'
    },
    {
      topic: 'Desgin and Implementation of anAutomotive system',
      supervisor: 'Malama Maryam',
      date: '09/24/2009'
    },
    {
      topic: 'Design and implementation of an E-coomerce website',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    },
    {
      topic: 'Design and implementation of an image recognition system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): any{
    return this.http.get('http://127.0.0.1:8000/upload_topic/').subscribe((data: any) => {
      this.topics = data;
    });
  }
}
