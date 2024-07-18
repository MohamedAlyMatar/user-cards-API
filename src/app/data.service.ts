import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getData(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.dataUrl);
  }
}
