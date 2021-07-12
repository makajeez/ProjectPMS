import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompletedProjectComponent } from './projects/completed-project/completed-project.component';
import { ProjectTopicsComponent } from './projects/project-topics/project-topics.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'project_topics', component: ProjectTopicsComponent},
  {path: 'completed_project', component: CompletedProjectComponent},
  {path: 'forget-pw', component: ForgetPasswordComponent}
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
