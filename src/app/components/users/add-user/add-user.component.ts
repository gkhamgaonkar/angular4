import { Component, OnInit } from '@angular/core';
import {UserDetails, Title, Sex} from "../../../model/userdetails";
import {UserService} from "../../../services/user.service";
import {EnumEx} from "../../../model/utils";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userDetail : UserDetails;
  titles: Title[];
  sex: Sex[];

  constructor(private userService: UserService) {
    this.userDetail = UserDetails.createNewUser();
    this.titles = this.getTitles();
    this.sex = this.getUserSex();
  }

  ngOnInit() {
  }

  addNewUser(){
   // console.log(this.userDetail);
    this.userService.addAndNavigateTo(this.userDetail,"users");
  }


  private getTitles() {
    let titles: Title[] = [];

    //Get name-value pairs from ProductTypeEnum
    let titleEnumList = EnumEx.getNames(Title);
    titleEnumList.forEach(pair => {
      let title: Title;
      title = JSON.parse("\"" + pair + "\"");
      titles.push(title);
    });
    return titles;
  }


  private getUserSex() {
    let sex: Sex[] = [];
    let sexNames = EnumEx.getNames(Sex);
    sexNames.forEach(pair => {
      let sexName: Sex;
      sexName = JSON.parse("\"" + pair + "\"");
      sex.push(sexName);
    });
    return sex;
  }

}
