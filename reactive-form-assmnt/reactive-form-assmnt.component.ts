import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import {formatDate} from '@angular/common';
import { VariableAst } from '@angular/compiler';

@Component({
  selector: 'app-reactive-form-assmnt',
  templateUrl: './reactive-form-assmnt.component.html',
  styleUrls: ['./reactive-form-assmnt.component.css']
})
export class ReactiveFormAssmntComponent implements OnInit {
myReactiveForm:FormGroup;
isSubmitted:boolean=false;
subscription:string[]=['Basic',' Advanced', 'Pro'];

date=formatDate(new Date(),'yyyy-MM-dd','en_US');


currDate=formatDate(new Date(),'yyyy-MM-dd','en_US');
isDateGreater:boolean=false;



  constructor() { 
    this.createForm();
  }

  ngOnInit() {
    // setTimeout(() => {

    //   this.myReactiveForm.setValue({

    //     'userDeatils' : {

    //       'username': 'Codemind123',

    //       'email': 'codemind@gamil.com'

    //     },

    //     'course': 'HTML',

    //     'skills': ['angular']

    //   })

    // })

setTimeout(() => {

  this.myReactiveForm.patchValue({

    'userDeatils' : {

             'username': 'Codemind123',

            'email': 'codemind@gamil.com'

           }

  })

}, 5000)
  }

  createForm(){

    this.myReactiveForm=new FormGroup({
        'email':new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") ]),
        'subscription':new FormControl(' Advanced', Validators.required),
        'password':new FormControl('', Validators.required),
        'date':new FormControl('',[Validators.required]),

        'skills': new FormArray([

          new FormControl(null, Validators.required)
  
        ])
    });
  }
  onSubmit(){
    //alert('onSubmit method Called.');
    this.isSubmitted=true;
    alert(this.date);
    console.log('myReactiveForm', this.myReactiveForm.value);
  }
  
  isDate()
  {
    if(this.currDate<=this.date)
    {
      //alert("date1 is true");
      this.isDateGreater=true;
      return true;

    }
    else{
      //alert("date1 is false");
      this.isDateGreater=false;
      return false;
    }
  }

  OnAddSkills() {

    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));

  }

}
