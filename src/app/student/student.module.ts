import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UploadProjectTopicComponent } from './upload-project-topic/upload-project-topic.component';
import { UploadChaptersComponent } from './upload-chapters/upload-chapters.component';
import { RequestAppointmentComponent } from './request-appointment/request-appointment.component';
import { ViewChapterStatusComponent } from './view-chapter-status/view-chapter-status.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';



@NgModule({
  declarations: [
    UploadProjectTopicComponent,
    UploadChaptersComponent,
    RequestAppointmentComponent,
    ViewChapterStatusComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      {path: 'upload_project', component: UploadProjectTopicComponent},
      {path: 'update_profile', component: UpdateProfileComponent},
      {path: 'upload_chapter', component: UploadChaptersComponent},
      {path: 'request_appointment', component: RequestAppointmentComponent},
      {path: 'view_status', component: ViewChapterStatusComponent}
    ])
  ],
  exports: [
    UploadProjectTopicComponent,
    UploadChaptersComponent,
    RequestAppointmentComponent,
    ViewChapterStatusComponent
  ]
})
export class StudentModule { }
