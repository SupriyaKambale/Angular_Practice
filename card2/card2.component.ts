import { Component, OnInit } from '@angular/core';
import { DesignutilityserviceService } from '../designutilityservice.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  products={};
isSubmitted:boolean=false;

  constructor(private _msgService:DesignutilityserviceService) { }

  ngOnInit() {

    this.products=this._msgService.products;
   // this._msgService.print();
  }
 
  print()
  {
    this.isSubmitted=true;
  }
 
}
