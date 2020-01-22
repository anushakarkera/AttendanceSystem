import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  public student_list = [{usn: "01", name: "sahana", isPresent : true},
  {usn: "02", name: "abdul affou", isPresent : true},
  {usn: "03", name: "harshita", isPresent : true},
{ usn:"04",name:"Yajna", isPresent : true},
{usn:"05",name:"kushal", isPresent : true},
{usn:"05",name:"kushal", isPresent : true},
{usn:"05",name:"kushal", isPresent : true},
{usn:"05",name:"kushal", isPresent : true},
{usn:"05=6",name:"kushal", isPresent : true}];

  ngOnInit() {
  }
  onClick()
  {
    console.log(this.student_list)
  }
   setColor(index) {
     this.student_list[index].isPresent =!this.student_list[index].isPresent;
    // var target = e.target,
    
    //     status = e.target.classList.contains('active');
  
    // e.target.classList.add(status ? 'inactive' : 'active');
    // e.target.classList.remove(status ? 'active' : 'inactive'); 
  }

  }


