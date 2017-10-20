import {Ingredient} from '../shared/ingredient.model';
import { OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
export class ShoppingListService implements  OnInit{

  constructor(){}

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient) ;
    this.ingredientsChanged.next(this.ingredients.slice()) ;
  }

  getIngredients(){
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]){
    // for ( let ingredient of ingredients ) {
    //   this.addIngredient(ingredient) ;
    // }
    this.ingredients.push(...ingredients) ;
    this.ingredientsChanged.next(this.ingredients.slice()) ;
  }

  ngOnInit(): void {

  }

}
