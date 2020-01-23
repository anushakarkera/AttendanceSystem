import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  imageUrl : string = "/assets/profile-image/profileImage.jpg";
  public name="ABDUL AFFOU";

  constructor() { }

  ngOnInit() {
  }

}
