import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpclient : HttpClient) { }

  getProfileDetails() : Promise<any>{
    return this.httpclient.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25308d26b9c2454390608215e000dc8b")
    .toPromise();
  }
}
