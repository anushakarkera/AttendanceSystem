import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClasslistserviceService {

  constructor(private httpclient : HttpClient) { }
  getClasslist(classlist){
    return this.httpclient.post('http://juegostudio.in:3021/user/signup',classlist)
  }
}
