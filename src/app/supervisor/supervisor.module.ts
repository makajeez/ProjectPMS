import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { UploadProjectTopicsComponent } from './upload-project-topics/upload-project-topics.component';



@NgModule({
  declarations: [
    MakeAppointmentComponent, 
    UploadProjectTopicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'make_appointment', component: MakeAppointmentComponent},
      {path: 'upload_topics', component: UploadProjectTopicsComponent}
    ])
  ]
})
export class SupervisorModule { }
