import { Component } from '@angular/core';
import {UserDetails} from "../../model/userdetails";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent  {


  userDetails : UserDetails[];
  newUser : UserDetails;


  constructor (private router: Router){
    this.newUser = UserDetails.createNewUser();
    let datas = '[{"name":{"firstName": "John"  ,"title":"Mr",  "middleName" : "P" , "lastName":"Doe"}, "loginDetails" : {"userName": "johnd" , "password": "123"} , "roles" :[{"role":"DATA_ENTRY", "desc": "Data entry operator"},{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"MALE" },'+
      '{"name":{"title":"Mrs", "firstName": "Susan" , "middleName" : "G" , "lastName":"Doe"}, "loginDetails" : {"userName": "susand" , "password": "456"} , "roles" :[{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"FEMALE" },'+
      '{"name":{"title":"Master", "firstName": "Dennis" , "middleName" : "G" , "lastName":"Doe"}, "loginDetails" : {"userName": "dennisd" , "password": "789"} , "roles" :[{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"MALE" }]';
//	console.log("json object ");
//	console.log(JSON.parse(datas));
    this.userDetails = JSON.parse(datas);
//	console.log("user details ");
//	console.log(this.userDetails);

  }


  showUserList() {
    console.log("asdf");
    this.router.navigateByUrl("users")
  }
}
