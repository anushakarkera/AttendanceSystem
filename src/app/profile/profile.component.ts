import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  imageUrl : string = "/assets/profile_image/profileImage.png"; 

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
  
  constructor() { }
  
  

  // OnInit() {
  // }
  ngOnInit():void{
  }

}
