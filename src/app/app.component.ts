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
  public isMenuCollapsed = true;

  constructor(public router: Router) {

  }
  ngOnInit(): void {
    // this.router.navigate(['/signup']);
  }
}
