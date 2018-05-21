import {Injectable} from "@angular/core";
import {UserDetails} from "../model/userdetails";
import {Http} from "@angular//http";
import "rxjs/add/operator/toPromise";

const USER_SERVER = "http://localhost:3000";

@Injectable()
export class UserService {


  constructor(private  http: Http) {
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

  remove(userToRemove: UserDetails): Promsie<any> {
    return this.http.delete(USER_SERVER + "/users/" + userToRemove.id).toPromise();

  }

  add(userToAdd: UserDetails): Promise<UserDetails> {
    let found: boolean;
    return this.checkUserNameExists(userToAdd).then(response => {
      found = response;
      if (!found) {
        return this.http.get("http://localhost:3000/users?_sort=id&_order=desc&_start=0&_end=1").toPromise().then(response => {
          let obj: UserDetails[] = response.json();
          //console.log(obj[0].id);
          //userToAdd.id = obj[0].id;
          userToAdd.id++;
          //console.log(userToAdd);
          return this.http.post(USER_SERVER + "/users", userToAdd).toPromise().then(response1 => {
            //console.log(response1);
            return response1.json as UserDetails;
          });
        });
      }
    });

  }

  update(userToUpdate: UserDetails): Promise <UserDetails> {
    return this.http.put(USER_SERVER + "/users/" + userToUpdate.id, userToUpdate).toPromise().then(response1 => {
      //console.log(response1.json);
      return response1.json as UserDetails;
    });
  }

}
