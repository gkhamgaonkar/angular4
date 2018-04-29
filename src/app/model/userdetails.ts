

export interface UserLoginDetails {
	userName : string;
	password : string;

}
enum Sex {
	MALE = 1,
	FEMALE ,
	OTHER
}

enum Title {
	Mr,
	Mrs,
	Miss, 
	Dr,
	Prof,
	Master
}


export interface Roles {
	role : string;
	desc : string;
}
export interface Name {

	title: Title;
	firstName : string;
	lastName : string ;
	middleName : string;
}


export class UserDetails {


	name: Name;
	loginDetails : UserLoginDetails;
	roles : Roles[];
	userSex : Sex;
	userPhoto : string; 
	dateOfBirth : Date;


	constructor (name:Name, ld:UserLoginDetails, roles:Roles[], sex:Sex , userPhoto : string , dateOfBirth : Date){
			this.loginDetails = ld;
			this.roles = roles;
			this.userSex =sex;
			this.userPhoto = userPhoto ;
			this.dateOfBirth = dateOfBirth;
			this.name = name;
	}

	public static createNewUser(){

		let name : Name = {} as any;
		name.title = Title.Mr;
		name.firstName = "";
		name.middleName = "";
		name.lastName = "";
		let ld : UserLoginDetails = {} as any;
		ld.userName = "";
		ld.password = "";
		let roles : Roles[] = null;
		console.log("new user detail");
		return new UserDetails(name,ld,roles,null,null,null);
	}


}

export class EnumEx {
    static getNamesAndValues<T extends number>(e: any) {
        return EnumEx.getNames(e).map(n => ({ name: n, value: e[n] as T }));
    }
}
