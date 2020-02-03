import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { StudentlistService } from './../studentlist.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public dialog: MatDialog, private myservice: StudentlistService) { }
// {usn:"05",name:"kushal", isPresent : true},
// {usn:"05",name:"kushal", isPresent : true},
// {usn:"05",name:"kushal", isPresent : true},
// {usn:"05",name:"kushal", isPresent : true}];
  public student_list;
  ngOnInit() {
    this.student_list=this.myservice.getStudentList();

    this.myservice.getDetails()
    .subscribe(data => console.log(data));
  }
  // onClick()
  // {
  //   console.log(this.student_list)
  // }
   setColor(index) {
    this.myservice.updateStudentList(index);
    //     status = e.target.classList.contains('active');
  
    // e.target.classList.add(status ? 'inactive' : 'active');
    // e.target.classList.remove(status ? 'active' : 'inactive'); 
    

  }

  
  confirmList(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'custom-modelBox',
      width: "390px",

    });
    dialogRef.afterClosed().subscribe(results => {
      console.log('The dialog was closed');
      console.log(results);
      
    });
  }
}


