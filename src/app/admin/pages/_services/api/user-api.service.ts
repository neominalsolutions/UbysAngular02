import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../_models/user.model';
import { Observable } from 'rxjs';

// root olduğundan singleton çalışır. Her resquest instance alınmaz

// @Injectable() // Her request de instance alır yazmıyoruz
@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
