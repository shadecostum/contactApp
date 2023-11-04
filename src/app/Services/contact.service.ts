import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
url="https://localhost:7047/api/Contacts"
  constructor(private http:HttpClient) { }

  getContact()
  {
   return this.http.get(this.url)
  }
  postContact(data:any)
  {
    return this.http.post(this.url,data)
  }
}
