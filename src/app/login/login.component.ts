import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
<<<<<<< HEAD
=======
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

>>>>>>> 57557011574e3e6e273394d652c29239211faf30
import { LoginService } from '../service1/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = "";
  public password = "";
<<<<<<< HEAD
  constructor(private router: Router,private loginService : LoginService) { }
=======
  constructor(private router: Router , private _loginService : LoginService, private http: HttpClient) { }
>>>>>>> 57557011574e3e6e273394d652c29239211faf30

  ngOnInit() {

  }
  public body;
  url = "http://juegostudio.in:3018/user/login";
  
  
  onClick(){
    this.body = {"emai": this.email,
            "password": this.password}
    this.http.post(this.url,this.body).toPromise().then(data => console.log(data));
    console.log(this.email);
    console.log(this.password);
<<<<<<< HEAD
    this.loginService.getLoginDetails()
    .then(data =>   console.log(data));
=======

    this._loginService.getLoginDetails(this.email,this.password).subscribe((data) => {
      console.log(data);
    })

>>>>>>> 57557011574e3e6e273394d652c29239211faf30
  }
  onSignup(){
    this.router.navigate(['/register']);
  }
}
