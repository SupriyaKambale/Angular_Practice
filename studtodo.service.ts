import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudtodoService {
apiUrl="http://localhost:3000/studtodos";
  constructor(private httpClient:HttpClient) { }

  create(data:any):Observable<any>
  {
return (this.httpClient.post(this.apiUrl,data));
  }

  list()
  {
    return this.httpClient.get(this.apiUrl);
  }

  update(id:any, data:any)
  {
    let API_URL=`${this.apiUrl}/${id}`;
return this.httpClient.put(API_URL, data);
  }

  delete(id:any)
  {
    let API_URL=`${this.apiUrl}/${id}`;
    return this.httpClient.delete(API_URL);
  }
}
