import {
  AuthService
} from './../register/auth.service';
import {
  Recipe
} from './../recipes/recipe.model';
import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class DataHttp {
  // the root url of the firebase database
  rootURL = 'https://recipe-book-12837.firebaseio.com/';
  // injecting required services
  constructor(private http: HttpClient, private authServ: AuthService) {}
  // Handling Recipes Data
  // first saving the recipes to recipe.json
  saveRecipes(recipes: Recipe[]) {
    const token = this.authServ.getToken();
    return this.http.put(this.rootURL + 'recipes.json?auth=' + token, recipes);
  }
  // getting recipe data
  getRecipes() {
    const token = this.authServ.getToken();
    return this.http.get < Recipe[] > (this.rootURL + 'recipes.json?auth=' + token);
  }

}
