import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DemoService {
  apiUrl = "https://jsonplaceholder.typicode.com/users";
   url = "https://jsonplaceholder.typicode.com/posts";
//DI
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(this.apiUrl);
  }

  getPost()
  {
        return this.httpClient.get(this.url);
  }
}
