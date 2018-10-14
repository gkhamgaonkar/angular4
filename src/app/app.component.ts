import {Component} from '@angular/core';
import {UserDetails} from './components/users/model/userdetails'
import {UserService} from "./components/users/service/user.service";

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
