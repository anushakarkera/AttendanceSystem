import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {
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
  

  
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(['/studentlist']);
  }

}
