import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface myData{
// success :boolean,
// message: string
// }

// interface registerResponse{
//   success:boolean,
//   message :string
// }
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // data: any;



  constructor( private httpclient : HttpClient) {}
    
     getRegisterdetails(register){
       
       return this.httpclient.post('http://juegostudio.in:3021/user/signup',register)
     }
      
       

       
      
   }

