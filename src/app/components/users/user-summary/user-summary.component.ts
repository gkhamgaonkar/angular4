import {Component, Input, Output, EventEmitter} from '@angular/core';
import {UserDetails} from '../../../model/userdetails';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent {

  @Input()
  userDetail: UserDetails;
  @Output()
  viewDetails: EventEmitter<UserDetails> = new EventEmitter();

  public viewUserDetails() {
    this.viewDetails.emit(this.userDetail)
  }

  constructor(private  router: Router) {
  }

  showUserDetails(userDetail: UserDetails) {
    this.router.navigateByUrl("/users/" + userDetail.loginDetails.userName)

  }

  editUserDetails(userDetail: UserDetails) {
    this.router.navigateByUrl("/users/" + userDetail.loginDetails.userName)
  }
}
