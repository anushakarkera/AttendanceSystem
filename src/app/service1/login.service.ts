import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient : HttpClient) { }

  getLoginDetails() : Promise<any>{
    return this.httpclient.post("http://juegostudio.in:3021/user/login","hello")
    .toPromise();
  }
}


 