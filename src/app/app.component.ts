import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project_Monitoring_System';
  // @Input() login: boolean;
  options = ['one', 'two', 'three'];

  constructor(public router: Router) {

  }
  ngOnInit(): void {
    // this.router.navigate(['/signup']);
  }
}
