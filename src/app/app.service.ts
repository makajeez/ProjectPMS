import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  api = 'https://project-pms.herokuapp.com';
  currentUser: any;
  isLoggedIn!: boolean;

  constructor(private http: HttpClient) {}

  signUp(form: FormGroup): any{
    const option = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
    return this.http.post(`${this.api}/rest-auth/registration/`, JSON.stringify(form.value), option);
  }
  login(form: FormGroup): any{
    const option = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
    return this.http.post(`${this.api}/api-token-auth/`, JSON.stringify(form.value), option);
  }
  logout(): any{
    return this.currentUser = undefined;
  }
  requestAppointment(formvalue: FormGroup): any{
    return this.http.post(`${this.api}/req_meeting/`, JSON.stringify(formvalue.value));
  }
  getUsers(): Observable<object>{
    return this.http.get(`${this.api}/user/`);
  }
  getProposals(): Observable<object>{
    return this.http.get(`${this.api}/proposal/`);
  }
  getChapters(): Observable<object>{
    return this.http.get(`${this.api}/chapter/`);
  }
  getAppointmentReq(): Observable<object>{
    return this.http.get(`${this.api}/req_meeting/`);
  }
  getInvites(): Observable<object>{
    return this.http.get(`${this.api}/invite/`);
  }
}


















// return fetch(`${this.api}/rest-auth/registration/`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(form.value)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   this.currentUser = data;
    //   this.router.navigate(['/login']);
    //   this.toastr.success(`User ${form.get('username')?.value} Registered Successfully`, 'Success', {timeOut: 5000});
    // })
    // .catch(err => {
    //   console.log(err);
    //   // this.toastr.success(`User ${form.get('username')?.value} Registered Successfully`, 'Success', {timeOut: 5000});
    // });
