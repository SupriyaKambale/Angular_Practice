import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private  _utilityService:UtilityService) {
    this._utilityService.userName.subscribe(res=>{console.log('comp2',res);
    this.userName=res;},
    err=>{console.log('error occured comp2',err)})
   }
  userName:string;
  ngOnInit() {
  }
  updateUserName(uname)
  {
    this.userName=uname.value;
      console.log(uname.value);
      this._utilityService.userName.next(uname.value);
  }
}
