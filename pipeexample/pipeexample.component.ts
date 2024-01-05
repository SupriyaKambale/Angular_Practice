import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
todaysDate=new Date();
countLenght: number = 500;
employee = {

  empid: '1',

  empname: 'Supriya'

}
  constructor() { }


  ngOnInit() {
  }

}
