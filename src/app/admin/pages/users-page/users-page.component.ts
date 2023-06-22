import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../_services/api/user-api.service';
import { User } from '../_models/user.model';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users!: User[];

  constructor(private userApi: UserApiService) {}

  ngOnInit(): void {
    this.userApi.getUsers().subscribe({
      next: (data: User[]) => { // Promise Resolve
        // try
        console.log('data', data);
        this.users = [...data]; // ref için
      },
      error(err) { // Promise Reject
        // catch blogu
        console.log('err', err);
      },
      complete() {
        // error olsa da olmasa da her türlü iş bitince tetiklenir.
        // finally bloguna denk gelir.
      },
    });
  }
}
