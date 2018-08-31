import { Subject } from 'rxjs/Subject';
import { DataHttp } from './../../shared/dataHttp.service';
import {
  Injectable
} from '@angular/core';
import {
  Recipe
} from './recipe.model';
@Injectable()
export class RecipesService {
  recipes: Recipe[] = [];
  watchRecipes = new Subject<Recipe[]>();
  showLoading = new Subject<boolean>();
  constructor(private dataHttp: DataHttp) {}
  resetRecipes (recipes: Recipe[] = []) {
    this.recipes = recipes;
    this.watchRecipes.next(this.recipes);
  }
  fetchRecipes() {
    this.showLoading.next(true);
    setTimeout(() => {
    this.dataHttp.getRecipes().subscribe(
      (recipes) => {
        this.recipes = recipes;
        this.watchRecipes.next(this.recipes);
        this.showLoading.next(false);
      }
    );
    }, 500);
  }
  saveRecipes() {
    this.dataHttp.saveRecipes(this.recipes);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.watchRecipes.next(this.recipes);
  }
  editRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.watchRecipes.next(this.recipes);
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.watchRecipes.next(this.recipes);
  }
}
