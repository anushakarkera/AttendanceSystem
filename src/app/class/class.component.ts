import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
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
