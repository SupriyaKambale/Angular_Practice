import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { SkipSpecComponent } from './skip-spec/skip-spec.component';
import { EventBindingTestComponent } from './event-binding-test/event-binding-test.component';
import { TwoWayDBComponent } from './two-way-db/two-way-db.component';
import { FormsModule} from '@angular/forms';
import { CustomDirective } from './custom.directive';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { MyRedDirectiveDirective } from './my-red-directive.directive';
import { Test2Component } from './test2/test2.component';
import { CardComponent } from './card/card.component';
import { ChildToParentObjectPassComponent } from './child-to-parent-object-pass/child-to-parent-object-pass.component';
import { UserComponent } from './user/user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import { NgforComponent } from './ngfor/ngfor.component';
import { CountrystatedrpComponent } from './countrystatedrp/countrystatedrp.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgifexComponent } from './ngifex/ngifex.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateformComponent } from './templateform/templateform.component';
import { TemplateDrivenFormAsmntComponent } from './template-driven-form-asmnt/template-driven-form-asmnt.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    SkipSpecComponent,
    EventBindingTestComponent,
    TwoWayDBComponent,
    CustomDirective,
    MyRedDirectiveDirective,
    Test2Component,
    CardComponent,
    ChildToParentObjectPassComponent,
    UserComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    PagenotfoundComponent,
    DemopostComponent,
    MovieComponent,
    DemopostdetailsComponent,
    UserdetailsComponent,
    NgforComponent,
    CountrystatedrpComponent,
    NgifComponent,
    NgifexComponent,
    NgswitchComponent,
    NgstyleComponent,
    TemplateformComponent,
    TemplateDrivenFormAsmntComponent,
  ReactiveformComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    HttpClientModule,
    ProductModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCardModule,
      MatDialogModule,
       MatInputModule, 
       MatTableModule,
  MatToolbarModule, 
  MatMenuModule,
  MatIconModule,
  MatSelectModule,
  MatRadioModule, 
  MatDatepickerModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
