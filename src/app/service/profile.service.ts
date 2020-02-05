
// import { RequestOptions } from '@angular';
import { Injectable } from '@angular/core';
import { LoginService } from './../service1/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Http, Headers, RequestOptions } from "@angular/http";
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profile_info: any;
  auth: any;
  constructor(private http: Http) { 
    this.profile_info = {
      "fullname" : "",
      "email" : "",
      "phone" : "",
      "gender" : "",
      "city" : ""
    };
   }
 
  getProfileDetails(accessToken) {
    // let headers: HttpHeaders = new HttpHeaders();
    // headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTM5MTA5MzYwOGU1ZjNhMTJjYzcwNzAiLCJpYXQiOjE1ODA3OTgxNTcsImV4cCI6MTU4MDg4NDU1N30.ACi3WXoyHgkK5ugXSUbcPNphqb1obnUqm5FjDBhOHV0' );
    // let headers = new Headers({ "content-type": "application/json" });
    let headers = new Headers({ "Authorization": accessToken });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("	http://juegostudio.in:3021/user/profile",JSON.stringify(this.profile_info),options);
  }
}
