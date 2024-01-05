import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { UtilityModule } from '../shared/utility/utility.module';




@NgModule({
  declarations: [OrderlistComponent],
  
  imports: [
    CommonModule,
    AppRoutingModule,
    UtilityModule
  
  ]
})
export class OrdersModule { 
  constructor()
  {
    console.log('OrdersModule  called.');
  }
}
