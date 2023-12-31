import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from '../customerlist/customerlist.component';


const customerRoutes: Routes=[{path:'', component: CustomerlistComponent}];
@NgModule({
  declarations: [CustomerlistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ]
})
export class CustomerModule {
  constructor()
  {
    console.log('CustomerModule  called.');
  }
 }
