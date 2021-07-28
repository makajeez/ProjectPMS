import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';
import { CompletedProjectComponent } from './projects/completed-project/completed-project.component';
import { ProjectTopicsComponent } from './projects/project-topics/project-topics.component';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: SignupComponent},
  {path: 'project_topics', component: ProjectTopicsComponent},
  {path: 'completed_project', component: CompletedProjectComponent},
  {path: 'student', loadChildren: './student/student.module#StudentModule'},
  {path: 'supervisor', loadChildren: './supervisor/supervisor.module#SupervisorModule'},
  {path: '**', component: E404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
