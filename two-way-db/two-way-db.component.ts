import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-db',
  templateUrl: './two-way-db.component.html',
  styleUrls: ['./two-way-db.component.css']
})
export class TwoWayDBComponent implements OnInit {

//Declare variable
firstName :string = '-';
lastName:string ='-';
dept: string="-";
salary:number= 0;
value="";




  constructor() { }

  ngOnInit() {
  }

  clearValue()
  {
    this.firstName="";
    this.lastName="";
    this.dept="";
    this.salary=0;
  }

}
