import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-asmnt',
  templateUrl: './template-driven-form-asmnt.component.html',
  styleUrls: ['./template-driven-form-asmnt.component.css']
})
export class TemplateDrivenFormAsmntComponent implements OnInit {
  

  constructor() { }

  isSubmitted: boolean = false;
  email='';
formData:{email:' '};
domainstr='codemindtechnology.com';
 str1:string="Supriya@gmail.com";
 splt:number=this.str1.indexOf('@');
ipdomainstr:string=this.str1.substring(this.splt+1);


  ngOnInit(): void {
  }



 }
 
 
  

