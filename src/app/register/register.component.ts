import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageUrl:string="/assets/signup/img.png"; 
fileToUpload: File=null;
  constructor() { }

  ngOnInit() {
  }
  handleFileInput(file:FileList){
    this.fileToUpload=file.item(0);
    var reader=new FileReader();
    reader.onload=(event:any) => {
      this.imageUrl =event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload)
  }

}
