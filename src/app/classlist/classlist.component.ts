import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {
  // accessToken : String = this.classlistService.getAccessToken();

        
           public classSubjectId: string;
            public className:string; 
            public roomNumber:string;
            public subjectName: string;
            public time: string;
            public attendanceTaken:string;
      

          //   this._profileService.getclasslistDetails(this.accessToken )
          //   .subscribe((data : any) =>  {
          //     this.classSubjectId = data.data.classSubjectId;
          //     this.className = data.data.className;
          //     this.roomNumber = data.data.roomNumber;
          //     this.subjectName = data.data.subjectName;
          //     this.time= data.data.time;
          //     this.attendanceTaken=data.data.attendanceTaken;
          //     console.log(this.FullName,this.Email,this.Phone);
          //   });
          // }


  classes =[
    { 
      time:"10:00 AM",
     roomNumber:"201",
      className:"LH101",
   classSubjectID:"534NCD",
subjectName:"english"
    },
    {
      time:"10:00 AM",
     roomNumber:"201",
      className:"LH101",
   classSubjectID:"534NCD",
subjectName:"english"
    },
    {
      time:"10:00 AM",
     roomNumber:"201",
      className:"LH101",
   classSubjectID:"534NCD",
subjectName:"english"
  },
  {
    time:"10:00 AM",
    roomNumber:"201",
     className:"LH101",
  classSubjectID:"534NCD",
subjectName:"english"
  },
  {
    time:"10:00 AM",
     roomNumber:"201",
      className:"LH101",
   classSubjectID:"534NCD",
subjectName:"english"
  }
  ]
  getClasslist(){}
  

  
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(['/studentlist']);
  }

}
