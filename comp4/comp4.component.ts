import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private  _utilityService:UtilityService) {
    this._utilityService.userName.subscribe(res=>{console.log('comp4',res);
    this.userName=res;},
    err=>{console.log('error occured comp4',err)})
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
