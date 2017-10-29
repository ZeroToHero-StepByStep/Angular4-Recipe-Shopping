import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {RecipeService} from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styles: [],

})

export class RecipesComponent implements OnInit{

  constructor( private recipeService: RecipeService) {

  }

  ngOnInit(): void {

  }

}
