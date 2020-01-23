import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadProfileComponent } from '../upload-profile/upload-profile.component';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  imageUrl : string = "/assets/profile-image/profileImage.jpg"; 
  DialogService: any;

  luserDetails(event){
    event.preventDefault()
    const target = event.target
    const name = target.querySelector('#userName').value
    const email = target.querySelector('#Email_id').value
    const phno = target.querySelector('#phone_no').value

    console.log(name)
    console.log(email)
    console.log(phno)
  }
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void{
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UploadProfileComponent, {
      panelClass: 'custom-modelBox',
      width: "390px"
    });

    dialogRef.afterClosed().subscribe(results => {
      console.log('The dialog was closed');
      console.log(results);

      //reading file value
      var reader = new FileReader();
         reader.onload = (event :any) => {
           this.imageUrl = event.target.result;
         }
         reader.readAsDataURL(results);
    });
  
  }

  

}
