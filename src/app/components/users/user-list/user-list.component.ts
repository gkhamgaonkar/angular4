import {Component, OnInit} from '@angular/core';
import {UserDetails} from '../../../model/userdetails'
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


userDetails : UserDetails[];
newUser : UserDetails;

	constructor (private userService : UserService){
		this.newUser = UserDetails.createNewUser();


	}

  ngOnInit(): void {
    this.userService.getAllUsers().then((userDetails=> this.userDetails = userDetails));
	}

}
