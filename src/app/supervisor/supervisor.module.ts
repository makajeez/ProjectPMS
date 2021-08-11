import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { UploadProjectTopicsComponent } from './upload-project-topics/upload-project-topics.component';
import { SupervisorComponent } from './supervisor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ReviewSubmissionsComponent } from './review-submissions/review-submissions.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UploadCompletedProjectComponent } from './upload-completed-project/upload-completed-project.component';
// import { ReviewAppointmentsComponent } from './review-appointments/review-appointments.component';



@NgModule({
  declarations: [
    MakeAppointmentComponent,
    UploadProjectTopicsComponent,
    SupervisorComponent,
    ReviewSubmissionsComponent,
    StudentListComponent,
    UploadCompletedProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      {path: 'supervisor', component: SupervisorComponent },
      {path: 'review', component: ReviewSubmissionsComponent},
      {path: 'make_appointment', component: MakeAppointmentComponent},
      {path: 'upload_topics', component: UploadProjectTopicsComponent},
      {path: 'student_list', component: StudentListComponent},
      {path: 'submit_project_work', component: UploadCompletedProjectComponent}
    ])
  ]
})
export class SupervisorModule { }
