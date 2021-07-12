import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-topics',
  templateUrl: './project-topics.component.html',
  styleUrls: ['./project-topics.component.css']
})
export class ProjectTopicsComponent implements OnInit {
  topics = [
    {
      topic: 'Automotive system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    },
    {
      topic: 'Automotive system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    },
    {
      topic: 'Automotive system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    },
    {
      topic: 'Automotive system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    },
    {
      topic: 'Automotive system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    },
    {
      topic: 'Automotive system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    },
    {
      topic: 'Automotive system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    },
    {
      topic: 'Automotive system',
      supervisor: 'A.A.Datti',
      date: '09/24/2009'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
