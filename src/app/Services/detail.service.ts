import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
url="https://localhost:7047/api/Details";
  constructor(private http:HttpClient) { }

getDetail()
{
 return this.http.get(this.url)
}
addDetail(data:any)
{
return this.http.post(this.url,data)
}

}
