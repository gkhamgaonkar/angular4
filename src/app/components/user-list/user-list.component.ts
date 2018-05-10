import { Component } from '@angular/core';
import {UserDetails} from '../../model/userdetails'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {

  
userDetails : UserDetails[];
newUser : UserDetails;

	constructor (){
		this.newUser = UserDetails.createNewUser();
	let datas = '[{"name":{"firstName": "Gunjan"  ,"title":"Mr",  "middleName" : "P" , "lastName":"Khamgaonkar"}, "loginDetails" : {"userName": "gunjank" , "password": "123"} , "roles" :[{"role":"DATA_ENTRY", "desc": "Data entry operator"},{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"MALE" },'+
		'{"name":{"title":"Mrs", "firstName": "Sancheti" , "middleName" : "G" , "lastName":"Khamgaonkar"}, "loginDetails" : {"userName": "sanchetiek" , "password": "456"} , "roles" :[{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"FEMALE" },'+
		'{"name":{"title":"Master", "firstName": "Agastya" , "middleName" : "G" , "lastName":"Khamgaonkar"}, "loginDetails" : {"userName": "agastyak" , "password": "789"} , "roles" :[{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"MALE" }]';
	console.log("json object ");
	console.log(JSON.parse(datas)); 
	this.userDetails = JSON.parse(datas);
	console.log("user details ");
	console.log(this.userDetails); 

	}
  

}
