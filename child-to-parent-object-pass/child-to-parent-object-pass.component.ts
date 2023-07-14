import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-child-to-parent-object-pass',
  templateUrl: './child-to-parent-object-pass.component.html',
  styleUrls: ['./child-to-parent-object-pass.component.css']
})
export class ChildToParentObjectPassComponent implements OnInit {
  
employee:Employee;

  @Output() objFromChild:EventEmitter<Employee> =new EventEmitter<Employee>();

  constructor() { }


  ngOnInit() {
  }

  sendToParent()
  {
    this.employee=new Employee();
    this.employee.name='Codemind';
    this.employee.salary=45000;
    this.objFromChild.emit(this.employee);
  }

}
