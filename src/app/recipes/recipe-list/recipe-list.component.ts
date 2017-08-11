
import {Component} from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector : 'app-recipe-list',
  templateUrl : './recipe-list.component.html',
  styleUrls :['./recipe-list.component.css']
})

export class RecipeListComponent{
  recipes:Recipe[] =[
    new Recipe('A test recipe', 'this is simple a test' , 'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ'),
    new Recipe('A test recipe', 'this is simple a test' , 'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ')
  ] ;

}
