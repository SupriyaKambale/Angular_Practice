import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-test',
  templateUrl: './event-binding-test.component.html',
  styleUrls: ['./event-binding-test.component.css']
})
export class EventBindingTestComponent implements OnInit {
  count : number=0;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick()
  {
    let counts=this.count +=1;
    console.log("Event Binding Demo: Button was clicked!");
    
  }
  
  onKeyUp(value) {
    console.log('$event', value.target.value)
  }

} //end of export component class

