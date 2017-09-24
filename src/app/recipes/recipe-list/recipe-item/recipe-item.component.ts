import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';
import {Ingredient} from '../../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: { name: string, description: string, imgagePath: string , ingredients:Ingredient[] };

  recipeItemClicked() {
    this.recipeService.recipeSelected.emit(this.recipeItem) ;
    console.log('success') ;
  }


  constructor( private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

}
