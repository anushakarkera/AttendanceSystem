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
      branch:"cse",
      year:"first",
      sem:"1"
    },
    {
      time:"09:00 AM",
      branch:"ise",
      year:"first",
      sem:"1"
    },
    {
      time:"12:00 PM",
      branch:"mech",
  year:"first",
  sem:"1"
  },
  {
    time:"11:00 AM",
    branch:"civil",
    year:"second",
    sem:"3"
  },
  {
    time:"3:00 PM",
    branch:"civil",
    year:"third",
    sem:"5"
  }
  ]
  

  
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(['/studentlist']);
  }

}
