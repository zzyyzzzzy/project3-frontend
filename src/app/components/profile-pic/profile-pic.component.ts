import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {
  profilePic: string = "";
  isDisplayActive: boolean = true;
  isFormActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setProfilePic(choice: string) : void {
    console.log(choice);
  }
  getProfilePic() : string
  {
    //get profilepic from db
    console.log("If you see me, getting the profile pic has not been implimented");
    return "";
  }
  togglePicDisplay(): void {
    this.isDisplayActive = !this.isDisplayActive;
    this.isFormActive = !this.isFormActive;
  }
  

}
