import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = 'http://127.0.0.1:8000/signup/';
  constructor(private http: HttpClient) { }

  registerUser(form: FormGroup): any {
  //  const headers = new HttpHeaders({
  //     "Content-Type": 'application/json'
  //   });
    return this.http.post(this.ApiUrl , form)// {headers: headers})
  }
  getUsers(): void {
    this.http.get(this.ApiUrl + '/user');
  }
}
