export interface Ingredient {
	ingredient : string;
	measure : string;
}

export interface Instruction {
	instruction : string;
	photo : string;
}


export class Recipe {

	public title : string;
	public description : string ;
	public ingredients: Ingredient[];
	public instructions : Instruction[];
	public cover_photo : string ;

	constructor (t:string, desc:string, ing:Ingredient[],inst:Instruction[] , cp:string  ){
		this.cover_photo = cp;
		this.description = desc;
		this.title = t;
		this.ingredients = ing;
		this.instructions = inst;

	}

}