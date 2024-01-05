import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  namesearch:string='';

ProductArr:any[]=[{
sno:1,
name:'Mobile',
price:7000,
availability:'available'
},
{
  sno:2,
  name:'TV',
  price:67000,
  availability:'available'
  },
  {
    sno:3,
    name:'Washing Machine',
    price:17000,
    availability:'available'
    },
    {
      sno:4,
      name:'Laptop',
      price:55000,
      availability:'available'
      },
      {
        sno:5,
        name:'Watch',
        price:44000,
        availability:'Not available'
        }
];
  constructor() { }

  ngOnInit() {
  }

}
