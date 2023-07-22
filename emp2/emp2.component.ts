import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css']
})
export class Emp2Component implements OnInit {
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
