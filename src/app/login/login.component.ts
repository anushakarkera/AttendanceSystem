import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = "";
  public password = "";
  constructor(private router: Router, private http: HttpClient) { }

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
  }
  onSignup(){
    this.router.navigate(['/register']);
  }
}
