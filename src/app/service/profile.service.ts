import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpclient : HttpClient) { }

  getProfileDetails() : Promise<any>{
    return this.httpclient.post("http://juegostudio.in:3021/user/login","testing")
    .toPromise();
  }
}
