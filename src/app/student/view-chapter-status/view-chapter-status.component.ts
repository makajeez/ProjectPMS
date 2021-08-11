import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-view-chapter-status',
  templateUrl: './view-chapter-status.component.html',
  styleUrls: ['./view-chapter-status.component.css']
})
export class ViewChapterStatusComponent implements OnInit {

  constructor(private serve: AppService) { }

  ngOnInit(): void {
  }

}
