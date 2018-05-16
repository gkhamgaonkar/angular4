import { Component, OnInit } from '@angular/core';
import {UserDetails, Title, Sex} from "../../../model/userdetails";
import {Router} from "@angular/router";
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

  constructor(private userService: UserService, private router : Router) {
    this.userDetail = UserDetails.createNewUser();
    console.log(this.userDetail);
    this.titles = this.getTitles();
    this.sex = this.getUserSex();
  }

  ngOnInit() {
  }

  addNewUser(){
    console.log(this.userDetail);
    this.userService.add(this.userDetail).then(response => {
      this.router.navigateByUrl("users");
    });

  }


  private getTitles() {
    let titles: Title[] = [];

    //Get name-value pairs from ProductTypeEnum
    let titleEnumList = EnumEx.getNames(Title);
    console.log(titleEnumList);

    //Convert name-value pairs to ProductType[]
    titleEnumList.forEach(pair => {
      let title: Title;
      title = JSON.parse("\"" + pair + "\"");
      titles.push(title);
    });
    return titles;
  }


  private getUserSex() {
    let sex: Sex[] = [];
    //Get name-value pairs from ProductTypeEnum
    let sexNames = EnumEx.getNames(Sex);
    console.log(sexNames);
    //Convert name-value pairs to ProductType[]
    sexNames.forEach(pair => {
      let sexName: Sex;
      sexName = JSON.parse("\"" + pair + "\"");
      sex.push(sexName);
    });

    return sex;
  }

}
