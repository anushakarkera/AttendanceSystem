import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = "";
  public password = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }


  onClick(){
    console.log(this.username);
    console.log(this.password);
  }
  onSignup(){
    this.router.navigate(['/register']);
  }
}
