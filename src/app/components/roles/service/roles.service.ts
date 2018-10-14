import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Roles} from "../model/roles";


const USER_SERVER = environment.USER_SERVER;
@Injectable()
export class RolesService {

  constructor(private  http: HttpClient , private router : Router) {
  }


  public getAllRoles(): Promise<Roles[]> {
    return this.http.get(USER_SERVER + "/roles").toPromise().then(response => {
      return response as Roles[];
    });
  }

  remove(role: Roles): Promise<any> {
    return this.http.delete(USER_SERVER + "/roles/" + role.id).toPromise();
  }

  public findByUserName(roleName: string): Promise<Roles> {

    return this.http.get(USER_SERVER + "/roles?loginDetails.userName=" + roleName).toPromise().then(response => {
      //console.log(response);
      let obj: Roles[] = response as Roles[];
      //console.log(obj);
      return obj[0];
    });
  }



  addAndNavigateTo(roleToAdd: Roles,url: string): void {
    let found: boolean;
    this.checkUserNameExists(roleToAdd).then(response => {
      found = response;
      if (!found) {
        this.http.get(USER_SERVER + "/roles?_sort=id&_order=desc&_start=0&_end=1").toPromise().then(response => {
          let obj: Roles[] = response as Roles[];
          roleToAdd.id = obj[0].id + 1;
          console.log(obj.length);
          this.http.post(USER_SERVER + "/roles", roleToAdd).toPromise().then(response1 => {

            this.router.navigateByUrl(url);
          });
        });
      }
    });
  }


  private checkUserNameExists(roleToFind: Roles): Promise<boolean> {
    return this.getAllRoles().then(((roles) => {
      let found: boolean = false;
      if (!roles) {
        return null;
      }
      for (let rl of roles) {
        if (rl.name === roleToFind.name) {
          found = true;
          console.info("role " + roleToFind.name +   " : Found ")
        }
      }

      return found;
    }));
  }

}
