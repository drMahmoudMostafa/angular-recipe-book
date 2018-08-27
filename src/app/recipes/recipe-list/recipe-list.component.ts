import {
  RecipesService
} from './../recipes.service';
import {
  Recipe
} from './../recipe.model';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipesLoading = false;
  constructor(private recipeService: RecipesService) {}
  getRecipes() {
    this.recipeService.watchRecipes.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipeService.showLoading.subscribe(
      (bool: boolean) => {
        this.recipesLoading = bool;
      }
    );
  }
  onSaveRecipes() {
    this.recipeService.saveRecipes();
  }
  onFetchRecipes() {
    this.recipeService.fetchRecipes();
  }
  ngOnInit() {
    console.log(this.recipes.length);
    this.getRecipes();
    console.log(this.recipes.length);
  }
}
