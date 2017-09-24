import {Ingredient} from '../shared/ingredient.model';
import {OnInit} from '@angular/core';
export class ShoppingListService implements  OnInit{
  ngOnInit(): void {
  }

  constructor(){}

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  addIngredient(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient) ;
  }

  getIngredients(){
    return this.ingredients.slice() ;
  }
}
