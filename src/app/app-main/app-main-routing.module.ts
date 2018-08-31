import { AppMainComponent } from './app-main.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { SelectRecipeComponent } from './recipes/select-recipe/select-recipe.component';

const appRoutes: Routes = [
  {path: '', component: AppMainComponent, children: [
    {path: 'recipes', component: RecipesComponent, children: [
        {path: 'new', component: EditRecipeComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: EditRecipeComponent},
        {path: '', component: SelectRecipeComponent, pathMatch: 'full'}
    ]},
    {path: 'shopping-list',  component: ShoppingListComponent, data: {animation: 'ShoppinListPage'}},
    {path: '' , redirectTo: '/recipes', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppMainRoutingModule { }
