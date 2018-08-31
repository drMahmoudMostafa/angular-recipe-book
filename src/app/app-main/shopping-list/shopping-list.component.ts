import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { RouteAnimations } from '../../shared/route-animation';
import { Ingredient } from '../../shared/ingredient.model';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [RouteAnimations]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
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
