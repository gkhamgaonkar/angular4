import {Component, OnInit} from '@angular/core';
import {UserDetails, Roles} from "../../model/userdetails";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {RolesService} from "../../services/roles.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  userDetails : UserDetails[];
  roles: Roles[];
  userLoaded : boolean;
  rolesLoaded: boolean;


  constructor (private router: Router ,private userService : UserService , private roleService : RolesService ){
  }

  ngOnInit(): void {
    this.userService.getAllUsers().then(((userDetails) => {
      this.userDetails = userDetails;
      this.userLoaded = true;
      //console.log(this.userLoaded);
    }));
    this.roleService.getAllRoles().then(roles=>{
      this.roles = roles;
      this.rolesLoaded = true;
    })

  }

  showRolesList() {
    this.router.navigateByUrl("roles");
  }

  showUserList() {

    this.router.navigateByUrl("users");
  }
}
