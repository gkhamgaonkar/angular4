import {Component} from '@angular/core';
import {UserDetails} from './model/userdetails'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	userDetails : UserDetails[];
	constructor (){

	let datas = '[{"name":{"firstName": "Gunjan"  ,"title":"Mr",  "middleName" : "P" , "lastName":"Khamgaonkar"}, "loginDetails" : {"userName": "gunjank" , "password": "123"} , "roles" :[{"role":"DATA_ENTRY", "desc": "Data entry operator"},{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"MALE" },'+
		'{"name":{"title":"Mrs", "firstName": "Sancheti" , "middleName" : "G" , "lastName":"Khamgaonkar"}, "loginDetails" : {"userName": "sanchetiek" , "password": "456"} , "roles" :[{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"FEMALE" }]';
	console.log("json object ");
	console.log(JSON.parse(datas)); 
	this.userDetails = JSON.parse(datas);
	console.log("user details ");
	console.log(this.userDetails); 

	}


}
