import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-agecalculator',
  templateUrl: './agecalculator.component.html',
  styleUrls: ['./agecalculator.component.css']
})
export class AgecalculatorComponent implements OnInit {
  showAge: number;
  age: any;

  constructor() { }

  ngOnInit(): void {
  }
  agecalculator(): void
  {
    if(this.age)
    {
        const convertAge=new Date(this.age);
        const timeDiff=Math.abs(Date.now())-convertAge.getTime();
        this.showAge=Math.floor(timeDiff/(1000*3600*24)/365);
    }

  }
}
