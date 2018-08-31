import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMainRoutingModule } from './app-main-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipes.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app-main.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMainRoutingModule,
    SharedModule,
    RecipesModule,
    ShoppingListModule
  ],
  exports: [
    AppMainComponent
  ]
})
export class AppMainModule { }
