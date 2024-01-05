import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityserviceService {

  constructor() { }

  messageAlert()
  {
    alert("Thanks for subscribe. ");
  }

  products=[{name:"Laptop", id:"00001"},
  {name:"TV", id:"00002"}
 ]
}
