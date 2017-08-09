export class Recipe {
  public name: string ;
  public description: string ;
  public imgagePath: string ;

  constructor( name: string  , desc: string  , image : string ) {
    this.name = name ;
    this.description = desc ;
    this.imgagePath = image ;
  }

  
}
