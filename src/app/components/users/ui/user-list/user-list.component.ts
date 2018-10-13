import {Component, OnInit} from "@angular/core";
import {UserDetails} from "../../../../model/userdetails";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userDetails: UserDetails[];
  userLoaded: boolean;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.userService.getAllUsers().then((userDetails => {
        this.userDetails = userDetails;
        this.userLoaded = true;
      }
    ));

  }

  addNewUser(): void {
    this.router.navigateByUrl('/users/add');
  }
}
