import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('addIngForm') addIngForm: NgForm;
  subscription: Subscription;
  editItemIndex: number;
  editMode = false;
  editedItem: Ingredient;
  constructor(private shoppingListServ: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListServ.startEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListServ.getIngredient(index);
        this.addIngForm.setValue({
          ingName: this.editedItem.name,
          ingAmount: this.editedItem.amount
        });
      }
    );
  }
  onClear() {
    this.addIngForm.reset();
    this.editMode = false;
  }
  onSubmit() {
    const ingValue = this.addIngForm.value;
    const newIngredient = new Ingredient(ingValue.ingName, ingValue.ingAmount);
    if (this.editMode) {
      this.shoppingListServ.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListServ.addIngredient(newIngredient);
    }
    this.onClear();
  }
  onDelete() {
    this.shoppingListServ.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
