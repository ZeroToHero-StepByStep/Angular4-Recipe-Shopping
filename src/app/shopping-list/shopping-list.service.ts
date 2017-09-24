import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, OnInit} from '@angular/core';
export class ShoppingListService implements  OnInit{

  constructor(){}

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient) ;
    this.ingredientsChanged.emit(this.ingredients.slice()) ;
  }

  getIngredients(){
    return this.ingredients;
  }

  ngOnInit(): void {
  }

}
