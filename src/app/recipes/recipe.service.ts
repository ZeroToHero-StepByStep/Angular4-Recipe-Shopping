import {Recipe} from './recipe.model';
export class RecipeService{
 private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simple a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ'),
    new Recipe('New test recipe', 'this is simple a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ')
  ];

 getRecipes(){
   //only get a copy of the aarray
   return this.recipes.slice() ;
 }
}
