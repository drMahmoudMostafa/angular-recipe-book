import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import {
  Component,
  OnInit
} from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;
  constructor(
    private shoppingListServ: ShoppingListService,
    private recipesServ: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  onSendIngredient() {
    this.shoppingListServ.sendIngredient(this.recipe.ingredients);
  }

  ngOnInit() {
    this.recipeId = +this.route.snapshot.params['id'];
    this.recipe = this.recipesServ.recipes[this.recipeId];
    this.route.params.subscribe(
      (params: Params) => {
      this.recipeId = params['id'];
      this.recipe = this.recipesServ.recipes[this.recipeId];
    }
    );
  }
  onGoToEdit () {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe () {
    this.recipesServ.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }
}