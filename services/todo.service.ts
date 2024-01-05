import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    apiUrl="http://localhost:3000/todos";

    //DI
  constructor(private httpClient:HttpClient) { }

  //create method
  create(data:any):Observable<any>
  {
    console.log('todo service create method called');
    return this.httpClient.post(this.apiUrl, data);
  }

  //TO READ THE DATA  we are using this method we are giving name as list
  list() {
        return   this.httpClient.get(this.apiUrl);
  }

  //update
  update(id:any, data:any)
  {
   let API_URL=`${this.apiUrl}/${id}`;
    return  this.httpClient.put(API_URL, data);
  }

  delete(id:any){
    let API_URL=`${this.apiUrl}/${id}`;
     return   this.httpClient.delete(API_URL);
  }
}
