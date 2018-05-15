import {Component} from '@angular/core';
import {UserDetails} from './model/userdetails'
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


	constructor (private userService: UserService){

	}

  ngOnInit(): void {

  }


}
