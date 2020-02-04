// import { RequestOptions } from '@angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Http, Headers, RequestOptions } from "@angular/http";
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profile_info: any;
  auth: any;
  constructor(private http : HttpClient) { 
  //   this.profile_info = {
  //     "phone" : "",
  //     "gender" : "",
  //     "city" : ""
  //   };
   }
 
  getProfileDetails() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/JSON');
    headers.append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTMxMTc5NDE5NzQ2ZjBhYzZhOGNiMmIiLCJpYXQiOjE1ODA3OTc3MzgsImV4cCI6MTU4MDg4NDEzOH0.5-YCh5AFsoD5VPBwhPfAu1ssUhBvlK7xtuKrEQ08E9U' );
    return this.http.post("	http://juegostudio.in:3021/user/profile","testing",{ headers });
  }
}
