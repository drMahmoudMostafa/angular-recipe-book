import {
  Ingredient
} from './../shared/ingredient.model';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  ShoppingListService
} from './shopping-list.service';
import { Subscription } from '../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;
  constructor(private shoppingListServ: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListServ.getIngredients();
    this.subscription = this.shoppingListServ.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
  }
  onEditItem (index: number) {
    this.shoppingListServ.startEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
