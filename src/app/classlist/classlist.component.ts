import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {
  classes =[
    { 
      branch:"cse",
      year:"first",
      sem:"1"
    },
    {
      branch:"ise",
      year:"first",
      sem:"1"
    },
    {
      branch:"mech",
  year:"first",
  sem:"1"
  },
  {
    branch:"civil",
    year:"second",
    sem:"1"
  }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
