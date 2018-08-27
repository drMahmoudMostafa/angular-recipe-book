import { Recipe } from './../recipes/recipe.model';
import { RecipesService } from './../recipes/recipes.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeServ: RecipesService) {}

  ngOnInit() {}
  onSaveData () {
    // first saving recipes data
    // getting recipes from recipeService
    this.recipes = this.recipeServ.recipes;
    // saving recipes to the database
    this.recipeServ.saveRecipes();
  }
  onFetchData () {
    this.recipeServ.fetchRecipes();
  }
}
