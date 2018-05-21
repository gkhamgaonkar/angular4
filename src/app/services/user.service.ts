import {Injectable} from "@angular/core";
import {UserDetails} from "../model/userdetails";
import {Http} from "@angular//http";
import "rxjs/add/operator/toPromise";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

const USER_SERVER = environment.USER_SERVER;

@Injectable()
export class UserService {


  constructor(private  http: Http , private router : Router) {
    // this.userDetails = JSON.parse(datas);
  }

  public getAllUsers(): Promise<UserDetails[]> {
    return this.http.get(USER_SERVER + "/users").toPromise().then(response => {
      //console.log(response.json());
      return response.json() as UserDetails[];
    });
  }

  public findByUserName(username: string): Promise<UserDetails> {

    return this.http.get(USER_SERVER + "/users?loginDetails.userName=" + username).toPromise().then(response => {
      //console.log(response);
      let obj: UserDetails[] = response.json();
      //console.log(obj);
      return obj[0];
    });
  }

  private checkUserNameExists(user: UserDetails): Promise<boolean> {

    return this.getAllUsers().then(((userDetails) => {
      let found: boolean = false;
      if (!userDetails) {
        return null;
      }
      //console.log(userDetails);
      for (let ud of userDetails) {
        if (ud.loginDetails.userName === user.loginDetails.userName) {
          found = true;
        }
      }
      return found;
    }));
  }

  remove(userToRemove: UserDetails): Promise<any> {
    return this.http.delete(USER_SERVER + "/users/" + userToRemove.id).toPromise();

  }

  add(userToAdd: UserDetails): void {
    let found: boolean;
    this.checkUserNameExists(userToAdd).then(response => {
      found = response;
      if (!found) {
        this.http.get(USER_SERVER + "/users?_sort=id&_order=desc&_start=0&_end=1").toPromise().then(response => {
          let obj: UserDetails[] = response.json();
          userToAdd.id++;
          this.http.post(USER_SERVER + "/users", userToAdd).toPromise().then(response1 => {
              console.log(response1);
          });
        });
      }
    });
  }


  addAndNavigateTo(userToAdd: UserDetails,url: string): void {
    let found: boolean;
    this.checkUserNameExists(userToAdd).then(response => {
      found = response;
      if (!found) {
        this.http.get(USER_SERVER + "/users?_sort=id&_order=desc&_start=0&_end=1").toPromise().then(response => {
          let obj: UserDetails[] = response.json();
          userToAdd.id++;
          this.http.post(USER_SERVER + "/users", userToAdd).toPromise().then(response1 => {
            this.router.navigateByUrl(url);
          });
        });
      }
    });
  }

  update(userToUpdate: UserDetails): void {
    this.http.put(USER_SERVER + "/users/" + userToUpdate.id, userToUpdate);
  }

  updateAndNavigate(userToUpdate: UserDetails , url : string): void {
    this.http.put(USER_SERVER + "/users/" + userToUpdate.id, userToUpdate).toPromise().then(response1 => {
      this.router.navigateByUrl(url);
    });
  }

}
