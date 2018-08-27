import { RegisterComponent } from './register/register.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { SelectRecipeComponent } from './recipes/select-recipe/select-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    {path: '',  redirectTo: '/recipes', pathMatch: 'full', data: {page: '0'}},
    {path: 'recipes',  component: RecipesComponent, children: [
        {path: 'new', component: EditRecipeComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: EditRecipeComponent},
        {path: '', component: SelectRecipeComponent, pathMatch: 'full'}
    ]},
    {path: 'shopping-list',  component: ShoppingListComponent},
    {path: 'logIn', component: RegisterComponent, data: {loginMode: 'logIn'}},
    {path: 'signUp', component: RegisterComponent, data: {loginMode: 'signUp'}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
