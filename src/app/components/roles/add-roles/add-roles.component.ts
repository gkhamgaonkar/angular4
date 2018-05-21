import { Component, OnInit } from '@angular/core';
import {Roles, UserDetails} from "../../../model/userdetails";
import {RolesService} from "../../../services/roles.service";

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {


  role : Roles

  constructor(private roleService: RolesService) {
  this.role = UserDetails.createNewRole();
  }

  addNewRole() {
    this.roleService.addAndNavigateTo(this.role,"roles");
  }

  ngOnInit() {
  }

}
