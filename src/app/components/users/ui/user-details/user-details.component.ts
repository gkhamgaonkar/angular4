import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Sex, UserDetails, Title} from "../../model/userdetails";
import "rxjs/add/operator/switchMap";
import {EnumEx} from "../../../common/service/utils";
import {UserService} from "../../service/user.service";
import {RolesService} from "../../../roles/service/roles.service";
import {DropdownModule} from 'primeng/dropdown';
import {Roles} from "../../../roles/model/roles";
import {TableModule} from 'primeng/table';
import {SelectItem} from "primeng/api";



@Component({
  selector: 'app-user-details',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetail: UserDetails;
  userLoaded: boolean;
  editPage: boolean;
  titles: Title[];
  roles : Roles[];
  rolesSI: SelectItem[];
  sex: Sex[];
  displayedColumns : String[];
  rolesLoaded : boolean = false;
  selectedRole : Roles;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService , private rolesService: RolesService) {

    this.titles = this.getTitles();
    this.sex = this.getUserSex();
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


  ngOnInit(): void {
    // get param map from router
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userService.findByUserName(params.get('username')).then((userDetail => {
        this.userDetail = userDetail;
        //console.log(this.userDetail);
        this.userLoaded = true;
      }));
      let action = params.get('action');
      if (!action) {
        action = "VIEW";
      }
      if (action.toUpperCase() === 'VIEW') {
        this.editPage = false;
        this.displayedColumns = ['name', 'description' ];
      } else if (action.toUpperCase() === 'EDIT') {
        this.editPage = true;
        this.displayedColumns = ['name', 'description' , 'action'];
      }
    });
    this.getAllRoles();
  }


  private getTitles() {
    let titles: Title[] = [];

    //Get name-value pairs from ProductTypeEnum
    let titleEnumList = EnumEx.getNames(Title);
  //  //console.log(titleEnumList);

    //Convert name-value pairs to ProductType[]
    titleEnumList.forEach(pair => {
      let title: Title;
      title = JSON.parse("\"" + pair + "\"");
      titles.push(title);
    });
    return titles;
  }


  private getUserSex() {
    let sex: Sex[] = [];
    //Get name-value pairs from ProductTypeEnum
    let sexNames = EnumEx.getNames(Sex);
    ////console.log(sexNames);
    //Convert name-value pairs to ProductType[]
    sexNames.forEach(pair => {
      let sexName: Sex;
      sexName = JSON.parse("\"" + pair + "\"");
      sex.push(sexName);
    });
    return sex;
  }

  deleteRole(roleToDelete:Roles){
    if(!this.userDetail || !this.userDetail.roles){
      return;
    }
    let idx = 0 ;
    let found = false;
    for(let role of this.userDetail.roles){
      if(!found) {
        idx++;
      }
        if(role.name === roleToDelete.name){
          found = true;
        }
    }
    this.userDetail.roles = this.userDetail.roles.splice(idx,1);
  }

  updateUser(): void {
    this.userService.updateAndNavigate(this.userDetail , "users");
  }

  backToList(): void {
    this.router.navigateByUrl("users");
  }


  addRoleToUser(){
    if(!this.selectedRole){
      return;
    }
    let found : boolean = false;
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
