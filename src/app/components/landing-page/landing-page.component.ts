import {Component, OnInit} from '@angular/core';
import {UserDetails} from "../../model/userdetails";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  userDetails : UserDetails[];
  userLoaded : boolean;

  constructor (private router: Router ,private userService : UserService){
  }

  ngOnInit(): void {
    this.userService.getAllUsers().then(((userDetails) => {
      this.userDetails = userDetails;
      this.userLoaded = true;
      //console.log(this.userLoaded);
    }));
  }


  showUserList() {

    this.router.navigateByUrl("users");
  }
}
