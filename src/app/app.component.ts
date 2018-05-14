import {Component} from '@angular/core';
import {UserDetails} from './model/userdetails'
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	userDetails : UserDetails[];
	constructor (private userService: UserService){

	}

  ngOnInit(): void {
    this.userService.getAllUsers().then((userDetails => this.userDetails = userDetails));
  }


}
