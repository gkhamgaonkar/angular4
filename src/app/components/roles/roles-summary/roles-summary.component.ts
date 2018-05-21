import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Roles} from "../../../model/userdetails";
import {Router} from "@angular/router";
import {RolesService} from "../../../services/roles.service";

@Component({
  selector: 'app-roles-summary',
  templateUrl: 'roles-summary.component.html',
  styleUrls: ['roles-summary.component.css']
})
export class RolesSummaryComponent  {


  showData : boolean;

  @Input()
  role: Roles;
  @Output()
  viewDetails: EventEmitter<Roles> = new EventEmitter();

  public viewUserDetails() {
    this.viewDetails.emit(this.role)
  }

  constructor(private  router: Router , private roleService : RolesService) {
    this.showData = true;
  }

  public deleteRole(role: Roles){
    //console.log("remove clicked!!");
    this.roleService.remove(role).then(response => {
      this.showData = false;
    });

  }

}
