import { Component, OnInit } from '@angular/core';
import {Roles} from "../../../model/userdetails";
import {RolesService} from "../../../services/roles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-roles-list',
  templateUrl: 'roles-list.component.html',
  styleUrls: ['roles-list.component.css']
})
export class RolesListComponent implements OnInit {
  roles: Roles[];
  rolesLoaded: boolean;

  constructor(private rolesService: RolesService, private router: Router) { }

  ngOnInit() {
    this.rolesService.getAllRoles().then((userDetails => {
        this.roles = userDetails;
        this.rolesLoaded = true;
      }
    ));
  }

  addNewRole(): void {
    this.router.navigateByUrl('/roles/add');
  }

}
