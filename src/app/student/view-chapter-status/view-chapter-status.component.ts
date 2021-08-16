import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-view-chapter-status',
  templateUrl: './view-chapter-status.component.html',
  styleUrls: ['./view-chapter-status.component.css']
})
export class ViewChapterStatusComponent implements OnInit {
  meetingReq: any;
  proposals: any;
  chapters: any;
  invites: any;

  constructor(private serve: AppService) { }

  ngOnInit(): void {
    this.getAppointmentReq();
    this.getInvite();
    this.getProp();
    this.getChaps();
  }

  getProp(): any{
    this.serve.getProposals().subscribe({
      next: (data: any) => {
        this.proposals = data.filter((user: any) => user.student === this.serve.currentUser.username);
        return this.proposals;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  getChaps(): any{
    return this.serve.getChapters().subscribe({
      next: (data: any) => {
        this.chapters = data.filter((user: any) => user.student === this.serve.currentUser.username);
        return this.chapters;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
 getAppointmentReq(): any {
  return this.serve.getAppointmentReq().subscribe({
    next: (data: any) => {
      this.meetingReq = data.filter((user: any) => user.student === this.serve.currentUser.username);
      return this.meetingReq;
    },
    error: (error: any) => {
      console.log(error);
    }
    });
  }
  getInvite(): any{
    return this.serve.getInvites().subscribe({
      next: (data: any) => {
        this.invites = data.filter((user: any) => user.student === this.serve.currentUser.username);
        return this.invites;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
