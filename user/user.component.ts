import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//import { info } from 'console';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Output() parentFunction: EventEmitter<any>=new EventEmitter();


  constructor() { }

  sendData()
{
  let data={ename:'a', age:23, dept:'IT', salary:50000};
  this.parentFunction.emit(data);

}


  ngOnInit():void {
  
  }

}
