import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './camera/camera.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductComponent } from './product.component';
import { WatchComponent } from './watch/watch.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent,
    CameraComponent,
    LaptopComponent,
    MobileComponent,
    WatchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductModule { }
