import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName:string;
  constructor(private  _utilityService:UtilityService) { 
    this._utilityService.userName.subscribe(res=>{console.log('comp1',res);
                                                  this.userName=res;},
                                            err=>{console.log('error occured comp1',err)
                                            })
    
  }
 
  ngOnInit() {
  }
  updateUserName(uname)
  {
    this.userName=uname.value;
      console.log(uname.value);

      this._utilityService.userName.next(uname.value);
  }
}
