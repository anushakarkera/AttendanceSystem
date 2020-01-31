import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FindValueOperator } from 'rxjs/internal/operators/find';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  constructor( private httpclient : HttpClient) {}
    
     getRegisterdetails(register){
       
       return this.httpclient.post('http://juegostudio.in:3021/user/signup',register)
      //  return FindValueOperator;
   }
}
