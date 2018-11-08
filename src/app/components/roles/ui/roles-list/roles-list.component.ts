import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {RolesService} from "../../service/roles.service";
import {Router} from "@angular/router";
import {Roles} from "../../model/roles";

@Component({
  selector: 'app-roles-list',
  templateUrl: 'roles-list.component.html',
  styleUrls: ['roles-list.component.css']
})
export class RolesListComponent implements OnInit {
  roles: Roles[];
  rolesLoaded: boolean;
  displayedColumns = ['name', 'description' , 'action'];


  constructor(private rolesService: RolesService, private router: Router,  private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllRoles();
  }

  private getAllRoles() {
    this.rolesService.getAllRoles().then((userDetails => {
        this.roles = userDetails;
        console.log(this.roles);
        this.rolesLoaded = true;
      }
    ));
  }

  addNewRole(): void {
    this.router.navigateByUrl('/roles/add');
  }

  public deleteRole(role: Roles){
    console.log("remove clicked!!");
    this.rolesService.remove(role).then(response => {
      this.getAllRoles();
    });

  }

}
