// import { Component, OnInit } from '@angular/core';
// import { UserService } from './../User.service';

// @Component({
//   selector: 'app-user-list',
//   template: `
//     <h2>User List</h2>
//     <h3>{{errorMsg}}</h3>
//     <ul *ngFor="let user of Users">
//       <li> {{Users.id}} - {{Users.first_name}} - {{Users.last_name}}</li>
//     </ul>
//   `,
//   styles: []
// })
// export class UserListComponent implements OnInit {

//   public Users = [];
//   public errorMsg;
//   constructor(private _userService: UserService) { }

//   ngOnInit() {
//     this._userService.getUsers()
//       .subscribe(data => this.Users = data,
//                 error => this.errorMsg = error);
//   }



// }
