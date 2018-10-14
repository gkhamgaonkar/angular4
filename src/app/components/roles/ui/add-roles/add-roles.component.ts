import { Component, OnInit } from '@angular/core';
import {UserDetails} from "app/components/users/model/userdetails";
import {RolesService} from "app/components/roles/service/roles.service";
import {Roles} from "../../model/roles";

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {


  role : Roles;

  constructor(private roleService: RolesService) {
  this.role = UserDetails.createNewRole();
  }

  addNewRole() {
    this.roleService.addAndNavigateTo(this.role,"roles");
  }

  ngOnInit() {
  }

}
