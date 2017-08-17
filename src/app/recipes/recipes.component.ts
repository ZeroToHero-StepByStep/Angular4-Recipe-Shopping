import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styles: []
})

export class RecipesComponent {
  selectedRecipe : Recipe ;

}
