import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService{


  recipesChanged = new Subject<Recipe[]>() ;
 // recipeSelected = new EventEmitter<Recipe>() ;

 private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simple a test',
      'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fires' , 20)
      ]),

    new Recipe(
      'New test recipe',
      'this is simple a test',
      'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ',
      [
        new Ingredient('Buns' ,2 ) ,
        new Ingredient('Meat' ,1)
      ])
  ];

 constructor( private slService: ShoppingListService) {}

 getRecipes(){
   //only get a copy of the aarray
   return this.recipes.slice() ;
 }


 getRecipe(index:number) {
   return this.recipes.slice()[index];
 }

 addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients) ;
 }

 addRecipe( recipe : Recipe ) {
    this.recipes.push(recipe) ;
    this.recipesChanged.next(this.recipes.slice()) ;
 }

 updateRecipe ( index : number , newRecipe : Recipe ) {
   console.log('update recipe name:'+ newRecipe.name);
   console.log('update recipe imagePath:'+ newRecipe.imagePath);
   console.log('update recipe description:'+ newRecipe.description);
    this.recipes[index] = newRecipe ;
    this.recipesChanged.next(this.recipes.slice()) ;
 }


}
