import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

myReactiveForm:FormGroup;
courses=['Angular','JavaScript','CSS'];
genders=[{id:'1', value:'Male'},
         {id:'2', value:'Female'}];
isSubmitted: boolean = false;
formData={email:'', username:'', course:'', gender:''};
  constructor() {
    this.createForm();
   }
  ngOnInit() {
  }
createForm()
{
  this.myReactiveForm=new FormGroup({
    'username':new FormControl(null),
    'email':new FormControl(null),
    'course':new FormControl('Angular'),
    'gender':new FormControl(null)
  });
}

  onSubmit(form:FormGroup )
  {
 alert('onSubmit method called.');
 
// console.log('MyReactiveForm', this.myReactiveForm.value);
this.isSubmitted = true;
console.log(form);
this.formData.username = this.myReactiveForm.value.username;
 this.formData.email = this.myReactiveForm.value.email;
 this.formData.course = this.myReactiveForm.value.course;
 this.formData.gender = this.myReactiveForm.value.gender;
  }

/* login(form:FormGroup ) 
  {
    this.isSubmitted = true;
console.log(form);
 this.formData.email = form.value.email;
 this.formData.username = form.value.username;
 this.formData.course = form.value.course;
 this.formData.gender = form.value.gender;

  }
  */
  
 
}

