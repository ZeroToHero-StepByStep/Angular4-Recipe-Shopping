import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>() ;

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

}
