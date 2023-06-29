import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
