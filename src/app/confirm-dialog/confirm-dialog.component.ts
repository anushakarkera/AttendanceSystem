import { ListComponent } from './../list/list.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentlistService } from './../studentlist.service';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,   
    @Inject(MAT_DIALOG_DATA) public fileUpload : File = null, private myservice: StudentlistService) { }
    student_list;
  ngOnInit() {
      }
  onNoClick(){
    this.dialogRef.close();
  }
  
  confirmation(): void{
    this.student_list=this.myservice.getStudentList();
    for(let student of this.student_list){
      if(student.isPresent == false){
        console.log(student.usn);
      }
    }
    this.dialogRef.close();

  }
}
