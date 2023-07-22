import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-empn',
  templateUrl: './empn.component.html',
  styleUrls: ['./empn.component.css']
})
export class EmpnComponent implements OnInit {

  isSubmitted:boolean=false;
  employees:{};
  eid:string;
  empid:string;

  constructor(objEmpService: EmpserviceService) {
     this.employees=objEmpService.employees;
   this.empid=this.eid;
   }

  ngOnInit() {
  }
  display()
  {
    this.isSubmitted=true;
 
  }

}
