import {Injectable} from '@angular/core';
import {UserDetails} from "../model/userdetails";


@Injectable()
export class UserService {
  userDetails: UserDetails[];

  constructor() {
    let datas = '[{"name":{"firstName": "John"  ,"title":"Mr",  "middleName" : "P" , "lastName":"Doe"}, "loginDetails" : {"userName": "johnd" , "password": "123"} , "roles" :[{"role":"DATA_ENTRY", "desc": "Data entry operator"},{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"MALE" },' +
      '{"name":{"title":"Mrs", "firstName": "Susan" , "middleName" : "G" , "lastName":"Doe"}, "loginDetails" : {"userName": "susand" , "password": "456"} , "roles" :[{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"FEMALE" },' +
      '{"name":{"title":"Master", "firstName": "Dennis" , "middleName" : "G" , "lastName":"Doe"}, "loginDetails" : {"userName": "dennisd" , "password": "789"} , "roles" :[{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"MALE" }]';
    this.userDetails = JSON.parse(datas);
  }

  getAllUsers(): Promise<UserDetails[]> {
    return new Promise<UserDetails[]>((resolve, reject) => {
      resolve(this.userDetails)
    });
  }

  findByUserName(username: string): Promise<UserDetails> {

    return new Promise<UserDetails>((resolve, reject) => {
      for (let user of this.userDetails) {
        if (user.loginDetails.userName === username) {
          resolve(user);
          return;
        }
      }
      reject(Error("User not found !!"))
    });
  }

  add(userToAdd: UserDetails): void {
    this.userDetails.push(userToAdd);
    console.log(this.userDetails)
  }

  update(userToUpdate : UserDetails) : void {
    console.log("searching for " + userToUpdate.loginDetails.userName);
    let number_idx =  this.getIndexOf(userToUpdate.loginDetails.userName);
    console.log("number_idx " + number_idx);
    console.log(this.userDetails);
    if(number_idx!=-1){
      this.userDetails.splice(number_idx, 1,userToUpdate);

      console.log(this.userDetails);
    }


  }

  private getIndexOf(userName : string) : number {
    let index: number = 0 ;
    for (let user of this.userDetails) {
      if (user.loginDetails.userName === userName) {
        return index;
      }
      index ++ ;
    }
    return -1;
  }


}
