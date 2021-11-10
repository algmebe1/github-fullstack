import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUser(username: string, pat: string): Observable<User> {
    return this.http.get<User>(
      `http://localhost:8080/?pat=${pat}&username=${username}`
    );
  }
}
