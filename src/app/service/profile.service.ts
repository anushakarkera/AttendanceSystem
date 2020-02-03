import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpclient : HttpClient) { }

  getProfileDetails() : Promise<any>{
    return this.httpclient.post("	http://dummy.restapiexample.com/api/v1/create"," ")
    .toPromise();
  }
}
