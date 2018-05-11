import { Component ,Input , Output, EventEmitter} from '@angular/core';
import { UserDetails } from '../../model/userdetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent  {

	@Input()
	userDetail : UserDetails;
	@Output()
	viewDetails : EventEmitter<UserDetails> = new EventEmitter();
	public viewUserDetails(){
		this.viewDetails.emit(this.userDetail)
	}

  constructor() { }

}
