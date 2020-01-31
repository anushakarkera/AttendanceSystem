import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../service1/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = "";
  public password = "";
  constructor(private router: Router,private loginService : LoginService) { }

  ngOnInit() {
  }


  onClick(){
    console.log(this.username);
    console.log(this.password);
    this.loginService.getLoginDetails()
    .then(data =>   console.log(data));
  }
  onSignup(){
    this.router.navigate(['/register']);
  }
}
