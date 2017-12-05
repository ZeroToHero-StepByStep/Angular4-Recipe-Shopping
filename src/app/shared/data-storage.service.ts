import { Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Response} from '@angular/http';


@Injectable()
export class DataStorageService{

  constructor (private http: Http , private recipeService: RecipeService){

  }

  storeRecipes(){
    return this.http.put('https://ng-recipe-book-27d45.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()) ;
  }

  getRecipes(){
    this.http.get('https://ng-recipe-book-27d45.firebaseio.com/recipes.json')
      .subscribe(
        (response : Response) =>{
          const recipes = response.json();
          this.recipeService.setRecipes(recipes);
        }
      );
  }



}
