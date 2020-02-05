// import { IProfile } from './../service/profile.service';
import { LoginService } from './../service1/login.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { UploadProfileComponent } from '../upload-profile/upload-profile.component';
import { ProfileService } from '../service/profile.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  imageUrl : string = "/assets/profile-image/profileImage.jpg"; 
  DialogService: any;

  accessToken : String = this._loginService.getAccessToken();

  public FullName : string;
  public email : string;
  public phone : string;
  public gender : string;
  public city : string; 

  profileForm: FormGroup;
  submitted = false;

  userDetails(event){
    // event.preventDefault()
    // const target = event.target
    // const name = target.querySelector('#userName').value
    // const email = target.querySelector('#Email_id').value
    // const phno = target.querySelector('#phone_no').value

    // console.log(name)
    // console.log(email)
    // console.log(phno)

    // this._profileService.getProfileDetails()
    // .then(data =>   console.log(data));

    this.submitted = true;
    // console.log(this.profileForm.value);
    

   // console.log(this.FullName)
  }
  
  constructor(
    public dialog: MatDialog, 
    private _profileService : ProfileService,
    private formBuilder : FormBuilder, 
    private _loginService : LoginService) { }

  ngOnInit(): void{
    this.profileForm = this.formBuilder.group({
      fullname: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(12),Validators.pattern('[0-9]+')])],
      gender : ['',Validators.required],
      city : ['',Validators.required]

    });


    
    this._profileService.getProfileDetails(this.accessToken)
    .subscribe((data : any) =>  {
     // this.FullName = data.data.fullName;
      console.log(data);
    });
  }
  get fval(){
    return this.profileForm.controls;
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

  onSave(): void {
  }

  

}
