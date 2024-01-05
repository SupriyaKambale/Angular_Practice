import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges {
@Input() userId:number;
  constructor() {
    console.log('Hook component constructor called.');
    
   }

   ngOnChanges(changes: SimpleChanges){
    console.log('onChanges method called', changes);
    console.log('UserID:', this.userId);

    for(const propname in changes) {
      const prop = changes[propname];
      console.log('prop',prop);
      const { previousValue, currentValue, firstChange} = prop;
      console.log( `Prev value ${previousValue}`);
      console.log( `Current Value ${currentValue}`);
      console.log( `First Change ${firstChange}`);
      console.log('...........................')
    }
   };
  // ngOnInit() {
  // }

}
