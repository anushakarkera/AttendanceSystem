import { ListComponent } from './../list/list.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentlistService } from './../studentlist.service';
<<<<<<< HEAD
import { LoginService } from './../service1/login.service';
=======
import { element } from 'protractor';
>>>>>>> 3d727759a17ed971655b104feeb2eadb19d871fb
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

  public accessToken : string = localStorage.getItem('access_token');
  public classID : string = "5e329ed395efa80dd8b81c01";
  public time : string = "09:00 AM" ;
  
  confirmation(): void{
  //   this.student_list=getStudentList();
  //   for(let student of this.student_list){
  //     if(student.isPresent == false){
  //       console.log(student.usn);
  //     }
  //   }
  //   this.dialogRef.close();

  // }
}
}