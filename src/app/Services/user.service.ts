import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="https://localhost:7047/api/Users"

  constructor(private http:HttpClient) { }

  get()
  {
    return this.http.get(this.url);
  }

  addUser(data:any)
  {
    return this.http.post(this.url, data)
  }
}
