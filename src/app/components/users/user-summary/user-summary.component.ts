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

  public showUserDetails(userDetail: UserDetails) {
    this.router.navigateByUrl('/users/view/' + userDetail.loginDetails.userName);

  }

  public editUserDetails(userDetail: UserDetails) {
    this.router.navigateByUrl('/users/edit/' + userDetail.loginDetails.userName  );
  }
}
