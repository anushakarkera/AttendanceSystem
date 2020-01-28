import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadProfileComponent } from '../upload-profile/upload-profile.component';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../service1/register.service';


// declare var NgForm:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  // [x: string]: any;
  image_Url:string="/assets/signup/img.png"; 
  

  registerForm: FormGroup;
  submitted = false;
  
  
  
  constructor(private router: Router,public dialog: MatDialog,private formBuilder:FormBuilder,private registerService : RegisterService) { }
  
  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      phone_number: ['',Validators.required],
      gender : ['', Validators.required],
      city : ['', Validators.required]

    });
  }
  get fval() {
    return this.registerForm.controls;
    }
  
   OnSubmit(){
     console.log(this.registerForm.value)
    this.registerService.getRegisterdetails()
    .subscribe(data => console.log(data));
    console.log("onsubmit");
     this.submitted = true;
     if(this.registerForm.invalid){
       console.log("invalid")
       return;
     }
     alert('SUCCESS!!');
     this.router.navigate(['/login']);
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
