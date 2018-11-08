import { Component, OnInit } from '@angular/core';
import {UserDetails, Title, Sex} from "../../model/userdetails";
import {UserService} from "../../service/user.service";
import {EnumEx} from "../../../common/service/utils";
import {SelectItem} from "primeng/api";
import {RolesService} from "../../../roles/service/roles.service";
import {Roles} from "../../../roles/model/roles";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userDetail : UserDetails;
  titles: Title[];
  rolesSI: SelectItem[];
  sex: Sex[];
  selectedRole : Roles;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService , private rolesService: RolesService) {
    this.userDetail = UserDetails.createNewUser();
    this.titles = this.getTitles();
    this.sex = this.getUserSex();
  }

  ngOnInit() {
    this.getAllRoles();
  }

  deleteRole(roleToDelete:Roles){
    if(!this.userDetail || !this.userDetail.roles){
      return;
    }
    let idx = 0 ;
    let found = false;
    for(let role of this.userDetail.roles){
      if(role === roleToDelete){
        found = true;
      }
      if(!found) {
        idx++;
      }
    }
    this.userDetail.roles.splice(idx,1);
  }


  backToList(): void {
    this.router.navigateByUrl("users");
  }

  addNewUser(){
   // console.log(this.userDetail);
    this.userService.addAndNavigateTo(this.userDetail,"users");
  }


  private getTitles() {
    let titles: Title[] = [];

    //Get name-value pairs from ProductTypeEnum
    let titleEnumList = EnumEx.getNames(Title);
    titleEnumList.forEach(pair => {
      let title: Title;
      title = JSON.parse("\"" + pair + "\"");
      titles.push(title);
    });
    return titles;
  }

  private getAllRoles() {
    this.rolesService.getAllRoles().then((roles => {


        this.roles = roles;
        this.rolesSI = [];
        this.rolesSI.push({label: "Please select" , value: null});
        for (let role of roles) {
          this.rolesSI.push({label: role.description , value:role});
        }
        this.rolesLoaded = true;
      }
    ));
  }


  private getUserSex() {
    let sex: Sex[] = [];
    let sexNames = EnumEx.getNames(Sex);
    sexNames.forEach(pair => {
      let sexName: Sex;
      sexName = JSON.parse("\"" + pair + "\"");
      sex.push(sexName);
    });
    return sex;
  }

  addRoleToUser(){
    if(!this.selectedRole){
      return;
    }
    let found : boolean = false;
    if(!this.userDetail.roles){
      this.userDetail.roles = [];
      this.userDetail.roles.push(this.selectedRole);
      return ;
    }
    for(let userRole of this.userDetail.roles) {
      if(userRole.name === this.selectedRole.name){
        found = true;
        console.log("found");
      }
    }
    if(!found){
      this.userDetail.roles.push(this.selectedRole);
      this.selectedRole = null;
    }
  }


}
