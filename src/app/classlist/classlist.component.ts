import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ClasslistserviceService} from './../classlistservice.service';


@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {

  accessToken : String = localStorage.getItem('access_token');
  date : string ="Thu Feb 13 2020 15:00:00 GMT+0530 (India Standard Time)";
         
//   classes =[
//     { 
//       time:"10:00 AM",
//      roomNumber:"201",
//       className:"LH101",
//    classSubjectID:"534NCD",
// subjectName:"english"
//     },
//     {
//       time:"10:00 AM",
//      roomNumber:"201",
//       className:"LH101",
//    classSubjectID:"534NCD",
// subjectName:"english"
//     },
//     {
//       time:"10:00 AM",
//      roomNumber:"201",
//       className:"LH101",
//    classSubjectID:"534NCD",
// subjectName:"english"
//   },
//   {
//     time:"10:00 AM",
//     roomNumber:"201",
//      className:"LH101",
//   classSubjectID:"534NCD",
// subjectName:"english"
//   },
//   {
//     time:"10:00 AM",
//      roomNumber:"201",
//       className:"LH101",
//    classSubjectID:"534NCD",
// subjectName:"english"
//   }
//   ]
  

  
  constructor(private router : Router,private lservice:ClasslistserviceService) { }
 
  // public classSubjectId: [];
  //  public className:[]; 
  //  public roomNumber:[];
  //  public subjectName: [];
  //  public time:[];
  //  public attendanceTaken:[];

  public classes :[];


  ngOnInit() {

    // this.class_list=this.lservice.getList();
     
    this.lservice.getClasslist(this.accessToken,this.date)
    .subscribe((data : any)=> {
      // this.classSubjectId = data.data.classSubjectId;
      //         this.className = data.data.className;
      //         this.roomNumber = data.data.roomNumber;
      //         this.subjectName = data.data.subjectName;
      //         this.time= data.data.time;
      //         this.attendanceTaken=data.data.attendanceTaken;
      this.classes=data.data,
      console.log(this.classes)
  });
  }
  onClick(){
    this.router.navigate(['/studentlist']);
  }

}
