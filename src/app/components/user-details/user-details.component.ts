import { Component ,Input , Output, EventEmitter} from '@angular/core';
import { UserDetails } from '../../model/userdetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {

	@Input()
	userDetail : UserDetails;
	@Output()
	viewDetails : EventEmitter<UserDetails> = new EventEmitter()
	public viewUserDetails(){
		this.viewDetails.emit(this.userDetail)
	}

  constructor() { }

}
