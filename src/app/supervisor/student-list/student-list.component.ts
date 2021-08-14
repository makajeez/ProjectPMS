import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any;

  constructor(
    private http: HttpClient,
    private serve: AppService
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.serve.getUsers().subscribe((data: any) => {
      this.students = data.filter((user: any) => user.email === this.serve.currentUser.email);
      return this.students;
    });
  }
}
