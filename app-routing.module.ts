import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';

import { UserdetailsComponent } from './userdetails/userdetails.component';


// we cn do routing links here also
//route is mapping path to component
const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component:AboutUsComponent},
 { path: 'contactus', component: ContactUsComponent },

  /* -------------------CODE FOR SINGLE ROUTER OUTLET ----------------------------------------------------------------
  {path:'product',  children:[
    {path:'', component: ProductComponent},
        {path:'camera', component:CameraComponent},
        {path:'laptop', component:LaptopComponent},
        {path:'mobile', component:MobileComponent},
        {path:'watch', component:WatchComponent}
      ]}, // http://localhost:4200/aboutus  
      
      -----------------------------------------
      */

      /* CODE FOR MULTIPLE ROUTER OUTLET */
      {path:'product', component: ProductComponent,
       children:[
             {path:'camera', component:CameraComponent},
            {path:'laptop', component:LaptopComponent},
            {path:'mobile', component:MobileComponent},
            {path:'watch', component:WatchComponent}
          ]},
  {path:'post', component:DemopostComponent},
  {path:'demopostdetails/:id', component:DemopostdetailsComponent},
  {path:'movie', component:MovieComponent},
  {path:'userdetails', component:UserdetailsComponent},

 {path:'**', component:PagenotfoundComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // for every application only one for root () and we pass routes as arg
  exports: [RouterModule]
})
export class AppRoutingModule { }
