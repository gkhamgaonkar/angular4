import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Sex, UserDetails} from "../../../model/userdetails";
import "rxjs/add/operator/switchMap";
import {Title} from "../../../model/userdetails";
import {EnumEx} from "../../../model/utils";
import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetail: UserDetails;
  userDetails: UserDetails[];
  editPage : boolean;
  titles: Title[];
  sex : Sex[];

  constructor(private route: ActivatedRoute ,private userService : UserService) {

    this.titles = this.getTitles();
    this.sex = this.getUserSex();
  }

  ngOnInit(): void {
    // get param map from router
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userService.findByUserName(params.get('username')).then((userDetail=> this.userDetail = userDetail));
      this.editPage = params.get('edit') != null;
    });
    // get all users from user serive
    this.userService.getAllUsers().then((userDetails=> this.userDetails = userDetails));
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
        let sexName : Sex;
        sexName= JSON.parse("\"" + pair + "\"");
        sex.push(sexName);
      });

    return sex;
  }

}
