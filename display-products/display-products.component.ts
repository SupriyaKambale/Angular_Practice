import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service'; 


@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
data:{};
products:{};
isCLicked:boolean=false;

  constructor(private objMyService: MyServiceService) { 
    this.data=objMyService.Data;
      this.products=objMyService.products;
  }


  
  //@ViewChild('content') content: ElementRef;   

  ngOnInit(): void {


  }
  print()
  {
    // this.objMyService.print();
    this.isCLicked=true;
  }
 
}

