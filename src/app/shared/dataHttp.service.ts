import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class DataHttp {
    // the root url of the firebase database
    rootURL = 'https://recipe-book-12837.firebaseio.com/';
    // injecting required services
    constructor(private http: HttpClient) {}
    // Handling Recipes Data
    // first saving the recipes to recipe.json
    saveRecipes(recipes: Recipe[]) {
       return this.http.put(this.rootURL + 'recipes.json', recipes);
    }
    // getting recipe data
    getRecipes() {
       return this.http.get<Recipe[]>(this.rootURL + 'recipes.json');
    }

}
