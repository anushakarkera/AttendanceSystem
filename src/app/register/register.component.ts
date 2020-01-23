import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadProfileComponent } from '../upload-profile/upload-profile.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  image_Url:string="/assets/signup/img.png"; 

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  editDialog(): void {
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
           this.image_Url = event.target.result;
         }
         reader.readAsDataURL(results);
    });
  }
}
