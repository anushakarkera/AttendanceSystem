import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor( private httpclient : HttpClient) {}
    
     getRegisterdetails(){
       console.log("fxdhgfdghvnb")
       return this.httpclient.post<any>('http://juegostudio.in:3018/user/signup', { name :'name',email:'email',password:'password'})
     
   }
}
