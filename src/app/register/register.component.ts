import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadProfileComponent } from '../upload-profile/upload-profile.component';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  image_Url:string="/assets/signup/img.png"; 
  public name="";
  public email="";
  public password="";
  public phone_number="";

  // registerForm: FormGroup;
  // loading = false;
  // submitted = false;
  // error : string;



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
// function ValidateEmail(email) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }
