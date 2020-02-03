import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentlistService {
  student_list = [{usn: "01", name: "sahana", isPresent : true},
  {usn: "02", name: "abdul affou", isPresent : true},
  {usn: "03", name: "harshita", isPresent : true},
  { usn:"04",name:"Yajna", isPresent : true},
  {usn:"05",name:"kushal", isPresent : true},
  {usn: "06", name: "sahana", isPresent : true},
  {usn: "07", name: "abdul affou", isPresent : true},
  {usn: "08", name: "harshita", isPresent : true},
  { usn:"09",name:"Yajna", isPresent : true},
  {usn:"10",name:"kushal", isPresent : true}];
  constructor( private httpclient : HttpClient) { }
  getDetails() : Promise<any>{
    return this.httpclient.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-29&sortBy=publishedAt&apiKey=0aa6d01ed30547f3bfdec2b54035b2b7 ")
    .toPromise();
  }



  getStudentList(){
    return this.student_list;
  }
  updateStudentList(usn: number){
    this.student_list[usn].isPresent=!this.student_list[usn].isPresent;
    // console.log(this.student_list[usn].name, this.student_list[usn].isPresent)
  }
  // getAbsentess(): Array<string>{
  //   let absentees: string[];
  //   for(let student of this.student_list){
  //     if(student.isPresent == false){
  //       absentees.push(student.usn)
  //     }
  //   }
  //   return absentees;
  // }
}
