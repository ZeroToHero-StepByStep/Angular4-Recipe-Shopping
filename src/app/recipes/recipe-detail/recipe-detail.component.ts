import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../recipe.model';


@Component(
  {
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styles: []
  }
)


export class RecipeDetailComponent {
  @Input() recipeDetail: Recipe;

  createRecipeDetial() {

  }


}
