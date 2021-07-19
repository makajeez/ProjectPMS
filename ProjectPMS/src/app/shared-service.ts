// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// import { User } from './_models/user';



// @Injectable({
//   providedIn: 'root'
// })
// export class SharedService {
//   readonly ApiUrl = 'http://127.0.0.1:8000/signup/';
//   private currentUserSubject: BehaviorSubject<User>;
//   private currentUser: Observable<User>;


//   constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }

//   public get currentUserValue(): User {
//     return this.currentUserSubject.value;
//   }

//   login(username: string, password: string) {
//     return this.http.post<any>
//   }

// }
