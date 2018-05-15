import {Injectable} from '@angular/core';
import {UserDetails} from "../model/userdetails";
import {Http} from "@angular//http";
import 'rxjs/add/operator/toPromise'

const USER_SERVER = "http://localhost:3000";

@Injectable()
export class UserService {


  constructor(private  http: Http) {
    // this.userDetails = JSON.parse(datas);
  }

  getAllUsers(): Promise<UserDetails[]> {
    return this.http.get(USER_SERVER + "/users").toPromise().then(response => {
      console.log(response.json());
      return response.json() as UserDetails[];
    });
  }

  findByUserName(username: string): Promise<UserDetails> {

    return this.http.get(USER_SERVER + "/users?loginDetails.userName=" + username).toPromise().then(response => {
      console.log(response);
      let obj: UserDetails[] = response.json();
      console.log(obj);
      return obj[0];
    });

  }

  add(userToAdd: UserDetails): void {
    // this.userDetails.push(userToAdd);
    // //console.log(this.userDetails)
  }

  update(userToUpdate: UserDetails): void {
    // console.log("searching for " + userToUpdate.loginDetails.userName);
    // let number_idx =  this.getIndexOf(userToUpdate.loginDetails.userName);
    // console.log("number_idx " + number_idx);
    // console.log(this.userDetails);
    // if(number_idx!=-1){
    //   this.userDetails.splice(number_idx, 1,userToUpdate);
    //   console.log(this.userDetails);
    // }
  }

  // private getIndexOf(userName : string) : number {
  //   let index: number = 0 ;
  //   for (let user of this.userDetails) {
  //     if (user.loginDetails.userName === userName) {
  //       return index;
  //     }
  //     index ++ ;
  //   }
  //   return -1;
  // }


}
