import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private _router:Router, private _authService:AuthService) { }
  
  ngOnInit() {
  }


  
  login(userName: any, password: any) {

   

    var result = this._authService.checkUserNameandPassword(userName, password);



    if (result == true) {



     window.alert('Login successfully');

     this._router.navigate(['/product']);

     

    } else {

     window.alert('Invalid username and password');

     this._router.navigate(['/login']);

    }



 }


 
}
