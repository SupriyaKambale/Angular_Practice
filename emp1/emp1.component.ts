import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component implements OnInit {
  isSubmitted:boolean=false;
  employees:{};

  constructor(objEmpService: EmpserviceService) {
     this.employees=objEmpService.employees;

   }

  ngOnInit() {
  }
  display()
  {
    this.isSubmitted=true;
  
  }
}
