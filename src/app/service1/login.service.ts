import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient : HttpClient) { }

  // getLoginDetails(name , pass) : Promise<any>{
  //   return this.httpclient.post("http://juegostudio.in:3021/user/login", {name , pass})
  //   .toPromise();
  // }

  getLoginDetails(name, pass) {
    return this.httpclient.post("http://juegostudio.in:3021/user/login", {"email":name , "password":pass});
  }
}
