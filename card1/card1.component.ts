import { Component, OnInit } from '@angular/core';
import { DesignutilityserviceService } from '../designutilityservice.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
  products={};
  isSubmitted:boolean=false;

  constructor(private _msgService:DesignutilityserviceService) { }

  ngOnInit() {
    this.products=this._msgService.products;
  }

 print()
  {
    this.isSubmitted=true;
  }
 
}
