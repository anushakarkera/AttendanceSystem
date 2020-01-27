import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public email_id;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log(this.email_id);
  }
}
