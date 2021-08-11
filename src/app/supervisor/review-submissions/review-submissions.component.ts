import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-review-submissions',
  templateUrl: './review-submissions.component.html',
  styleUrls: ['./review-submissions.component.css']
})
export class ReviewSubmissionsComponent implements OnInit {
  url = 'http://localhost:8000';
  filteredMeeting!: any;
  proposals!: any;
  chapters!: any;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private serve: AppService) { }

  ngOnInit(): void {
    this.getPro();
    this.getChap();
    this.getReq();
  }

  getReq(): any{
    return this.http.get(`http://127.0.0.1:8000/req_meeting/`).subscribe(data => {
      this.filteredMeeting = data;
    });
  }
  acceptMeet(meet: any): any{
    return this.http.put(`http://127.0.0.1:8000/req_meeting/`, JSON.stringify({
      id: meet.id,
      date: meet.date,
      student: meet.student,
      supervisor: meet.supervisor,
      time: meet.time,
      status: 'Accepted'
    })).subscribe({
      next: (data: any) => {
        this.toastr.success(`You hace accepted a meeting request from ${meet.student}`, 'Success', {timeOut: 2000});
      },
      error: (error: any) => {
        this.toastr.error(`Try again later`, 'Error', {timeOut: 2000});
      }
    });
  }
  rejectMeet(meet: any): any{
    return this.http.put(`http://127.0.0.1:8000/req_meeting/`, JSON.stringify({
      id: meet.id,
      date: meet.date,
      student: meet.student,
      supervisor: meet.supervisor,
      time: meet.time,
      status: 'Rejected'
    })).subscribe({
      next: (data: any) => {
        this.toastr.success(`You hace rejected this meeting request from ${meet.student} `, 'Success', {timeOut: 2000});
      },
      error: (error: any) => {
        this.toastr.error(`Proposal Upload Failed \n
        That's All we know`, 'Error', {timeOut: 2000});
      }
    });
  }
  getPro(): any{
    return this.http.get(`http://127.0.0.1:8000/proposal/`).subscribe(data => {
      this.proposals = data;
      console.log(data);
    });
  }
  acceptProp(prop: any): any{
    const formData = new FormData();

    formData.append('proposal_file', prop.proposal_file);
    formData.append('proposal_title', prop.proposal_title);
    formData.append('status', 'Accepted');
    formData.append('student', prop.student);
    formData.append('supervisor', prop.supervisor);

    return this.http.put(`http://127.0.0.1:8000/proposal/${prop.id}/`, formData).subscribe({
      next: (data: any) => {
        this.toastr.success(`Proposal Accepted`, 'Success', {timeOut: 2000});
        console.log(data);
      },
      error: (error: any) => {
        this.toastr.error('Proposal status not sent', 'Error', {timeOut: 2000});
        console.log(error);
      }
    });
  }
  rejectProp(prop: any): any{
    const formData = new FormData();

    formData.append('proposal_file', prop.proposal_file);
    formData.append('proposal_title', prop.proposal_title);
    formData.append('status', 'Rejected');
    formData.append('student', prop.student);
    formData.append('supervisor', prop.supervisor);
    // formData.
    return this.http.put(`http://127.0.0.1:8000/proposal/${prop.id}/`, formData).subscribe({
      next: (data: any) => {
        this.toastr.success(`Proposal Rejection sent`, 'Success', {timeOut: 2000});
        console.log(data);
      },
      error: (error: any) => {
        this.toastr.error(`Proposal Update Failed \n
        That's All we know`, 'Error', {timeOut: 2000});
        console.log(error);
      }
    });
  }
  getChap(): any{
    return this.http.get(`http://127.0.0.1:8000/chapter/`).subscribe(data => {
      this.chapters = data;
    });
  }

}
