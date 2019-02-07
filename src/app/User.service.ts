// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { IUser } from './feature1-module/models/User';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/Observable/throw';


// @Injectable()
// export class UserService {

//   private _url: string = "https://reqres.in/api/users";

//   constructor(private http:HttpClient) { }

//   getUsers(): Observable<IUser[]>{
//     return this.http.get<IUser[]>(this._url)
//                     .catch(this.errorHandler);
//   }
//   errorHandler(error: HttpErrorResponse){
//     return Observable.throw(error.message || "Server Error");
//   }

// }
