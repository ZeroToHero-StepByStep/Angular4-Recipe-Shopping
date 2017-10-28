import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component(
  {
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styles: []
  }
)


export class RecipeDetailComponent implements OnInit{


  @Input() recipeDetail: Recipe;
  id: number ;

  constructor( private recipeService : RecipeService , private route:ActivatedRoute , private router:Router ) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params:Params) =>{
          this.id = +params['id'] ;
          this.recipeDetail = this.recipeService.getRecipe(this.id);
        }
      )
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients) ;
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route}) ;
    // this.router.navigate(['../', this.id,'edit'], {relativeTo: this.route}) ;
  }



}
