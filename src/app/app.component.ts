import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project_Monitoring_System';
  public isMenuCollapsed = true;
  isLoggedIn = this.serve.isLoggedIn;
  // @Input() currentUser: any;

  constructor(
    public router: Router,
    private serve: AppService
    ) {

  }
  ngOnInit(): void {
    // this.router.navigate(['/login']);
  }
  logout(): void{
    this.serve.logout();
  }
}
