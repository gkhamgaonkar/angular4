import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserDetails} from "../../../model/userdetails";
import "rxjs/add/operator/switchMap";
import {Title} from "../../../model/userdetails";
import {EnumEx} from "../../../model/utils";

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

  constructor(private route: ActivatedRoute) {
    let datas = '[{"name":{"firstName": "John"  ,"title":"Mr",  "middleName" : "P" , "lastName":"Doe"}, "loginDetails" : {"userName": "johnd" , "password": "123"} , "roles" :[{"role":"DATA_ENTRY", "desc": "Data entry operator"},{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"MALE" },' +
      '{"name":{"title":"Mrs", "firstName": "Susan" , "middleName" : "G" , "lastName":"Doe"}, "loginDetails" : {"userName": "susand" , "password": "456"} , "roles" :[{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"FEMALE" },' +
      '{"name":{"title":"Master", "firstName": "Dennis" , "middleName" : "G" , "lastName":"Doe"}, "loginDetails" : {"userName": "dennisd" , "password": "789"} , "roles" :[{"role":"REVIEWER","desc": "Content reviewer"}] , "userSex":"MALE" }]';
    this.userDetails = JSON.parse(datas);
    this.titles = this.getTitles();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userDetail = this.findByUserName(params.get('username'));
      if(params.get('edit')!=null){
        this.editPage = true;
      } else {
        this.editPage = false;
      }

    });
  }



  findByUserName(username: string): UserDetails {
    for (let user of this.userDetails) {
      if (user.loginDetails.userName === username)
        return user;
    }
    return null;
  }


  private getTitles() {
    let titles: Title[] = [];

    //Get name-value pairs from ProductTypeEnum
    let titleEnumList = EnumEx.getNames(Title);
    console.log(titleEnumList);

    //Convert name-value pairs to ProductType[]
    titleEnumList.forEach(pair => {
      let title : Title;
      let json = "\"" + pair + "\"";
      console.log(json)
      title= JSON.parse(json);
      titles.push(title);
    });

    return titles;
  }

  changeSelectedType($event) {



  }
}
