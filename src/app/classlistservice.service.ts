import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ClasslistserviceService {
  class_list=[];

  constructor(private httpclient : HttpClient) { }
  getClasslist(accessToken) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':   accessToken
      })
    };
    const headers = new HttpHeaders({'Authorization':accessToken});
    return this.httpclient.post("http://juegostudio.in:3021/user/timeTable",httpOptions)
  }
  getList(){
    return this.class_list;
  }


  // getClasslist(classlist){
  //   return this.httpclient.post('http://juegostudio.in:3021/user/signup',classlist)
  // }
}
