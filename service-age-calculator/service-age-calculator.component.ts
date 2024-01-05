import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-service-age-calculator',
  templateUrl: './service-age-calculator.component.html',
  styleUrls: ['./service-age-calculator.component.css']
})
export class ServiceAgeCalculatorComponent implements OnInit {
  
age:any;
  constructor(private objService:MyServiceService) { }

  ngOnInit(): void {

    this.objService.print();
    this.objService.display();
   // this.objService.ageCalculator({ age: this.age });

  }


}
