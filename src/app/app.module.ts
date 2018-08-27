import { AuthService } from './register/auth.service';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import { SelectRecipeComponent } from './recipes/select-recipe/select-recipe.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipesService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DataHttp } from './shared/dataHttp.service';
import { ShortenPipe } from './shared/shorten.pipe';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    SelectRecipeComponent,
    EditRecipeComponent,
    ShortenPipe,
    LoadingAnimationComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipesService, DataHttp, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
