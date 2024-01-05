import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MyServiceService {
  showAge: number;
  products = [

    { name: 'Laptop', id: '101'},

    { name: 'Mobile', id: '102'},

    {name: 'TV', id: '103'}

  ]
  Data = [  
    { Id: 101, Name: 'Nitin', Salary: 1234 },  
    { Id: 102, Name: 'Sonu', Salary: 1234 },  
    { Id: 103, Name: 'Mohit', Salary: 1234 },  
    { Id: 104, Name: 'Rahul', Salary: 1234 },  
    { Id: 105, Name: 'Kunal', Salary: 1234 }  
  ];  
  constructor() {}

  

  ageCalculator({ age }: { age: any; }): number {
    if (age) {
      const convertAge = new Date(age);

      const timeDiff = Math.abs(Date.now() - convertAge.getTime());

      return (this.showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365));
    }
  }

  print(): void {
    alert("print method called");
    
  }

  display() {
    alert("display called");

  }
 

}
