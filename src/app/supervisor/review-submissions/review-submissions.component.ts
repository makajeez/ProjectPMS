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
  url = 'https://project-pms.herokuapp.com';
  filteredMeeting!: any;
  proposals!: any;
  chapters!: any;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private serve: AppService) { }

  ngOnInit(): void {
    this.getReq();
    this.getPro();
    this.getChap();
  }

  getReq(): any{
    this.http.get(`${this.url}/req_meeting/`).subscribe((data: any) => {
      this.filteredMeeting = data.filter((user: any) => user.supervisor === this.serve.currentUser.email);
      return this.filteredMeeting;
    });
  }
  acceptMeet(meet: any): any{
    return this.http.put(`https://project-pms.herokuapp.com/req_meeting/`, JSON.stringify({
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
    return this.http.put(`https://project-pms.herokuapp.com/req_meeting/`, JSON.stringify({
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
    this.http.get(`${this.url}/proposal/`).subscribe((data: any) => {
      this.proposals = data.filter((user: any) => user.supervisor === this.serve.currentUser.email);
      return this.proposals;
    });
  }
  acceptProp(prop: any): any{
    const formData = new FormData();

    formData.append('id', prop.id);
    formData.append('proposal_title', `${prop.proposal_title}`);
    formData.append('proposal_file', `${prop.proposal_file}`);
    formData.append('supervisor', `${prop.supervisor}`);
    formData.append('student', `${prop.student}`);
    formData.append('status', 'Accepted');

    return this.http.put(`${this.url}/proposal/${prop.id}/`, formData)
    .subscribe({
      next: (data: any) => {
        this.toastr.success(`Proposal Accepted`, 'Success', {timeOut: 2000});
      },
      error: (error: any) => {
        this.toastr.error('Proposal Rejected', 'Error', {timeOut: 2000});
        console.log(error);
      }
    });
  }
  rejectProp(prop: any): any{
    const formData = new FormData();

    formData.append('id', prop.id);
    formData.append('proposal_file', prop.proposal_file);
    formData.append('proposal_title', prop.proposal_title);
    formData.append('status', 'Rejected');
    formData.append('student', prop.student);
    formData.append('supervisor', prop.supervisor);
    return this.http.put(`${this.url}/proposal/${prop.id}/`, formData).subscribe({
      next: (data: any) => {
        this.toastr.success(`Proposal Rejection sent`, 'Success', {timeOut: 2000});
      },
      error: (error: any) => {
        this.toastr.error(`Proposal Update Failed \n
        That's All we know`, 'Error', {timeOut: 2000});
        console.log(error);
      }
    });
  }
  getChap(): any{
    this.http.get(`${this.url}/chapter/`).subscribe((data: any) => {
      this.chapters = data.filter((user: any) => user.supervisor === this.serve.currentUser.email);
      return this.chapters;
    });
  }
  acceptChap(chap: any): any{
    const formData = new FormData();

    formData.append('id', chap.id);
    formData.append('chapter_number', chap.chapter_number);
    formData.append('chapter_file', chap.chapter_file);
    formData.append('student', chap.student);
    formData.append('supervisor', chap.supervisor);
    formData.append('status', 'Accepted');

    return this.http.put(`${this.url}/chapter/${chap.id}/`, formData).subscribe({
      next: (data: any) => {
        this.toastr.success(`Chapter Accept Sent`, 'Success', {timeOut: 2000});
      },
      error: (error: any) => {
        this.toastr.error(`Chapter Update Failed That's All we know`, 'Error', {timeOut: 2000});
        console.log(error);
      }
    });
  }
  rejectChap(chap: any): any{
    const formData = new FormData();

    formData.append('id', chap.id);
    formData.append('chapter_number', chap.chapter_number);
    formData.append('chapter_file', chap.chapter_file);
    formData.append('student', chap.student);
    formData.append('supervisor', chap.supervisor);
    formData.append('status', 'Rejected');

    return this.http.put(`${this.url}/chapter/${chap.id}/`, formData).subscribe({
      next: (data: any) => {
        this.toastr.success(`Chapter Rejection Sent`, 'Success', {timeOut: 2000});
      },
      error: (error: any) => {
        this.toastr.error(`Chapter Update Failed That's All we know`, 'Error', {timeOut: 2000});
        console.log(error);
      }
    });
  }

}
