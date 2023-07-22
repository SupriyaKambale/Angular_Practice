import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
empId;
empName;
  constructor() { }

  msg()
  {
    alert('This is working');
  }

  employees=[{empId:'001', empName:'Supriya',salary:'100000', dept:'IT' , designation:'Angular Developer'  },
              {empId:'002', empName:'Vihaan',salary:'180000', dept:'IT' , designation:'Java Developer'},
              {empId:'003', empName:'Sameer',salary:'180000', dept:'IT' , designation:'Java Developer'},
              {empId:'004', empName:'Dnyanesh',salary:'180000', dept:'IT' , designation:'Angular Developer'}];
}
