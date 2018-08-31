import {
  Subscription
// tslint:disable-next-line:import-blacklist
} from 'rxjs';
import {
  AuthService
} from './../../register/auth.service';
import {
  RecipesService
} from './../recipes/recipes.service';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName = '';
  subscription: Subscription;
  constructor(private recipeServ: RecipesService, private authServ: AuthService) {}

  ngOnInit() {
    console.log('HeaderComponent intialized');
    this.userName = this.authServ.userName;
    console.log(this.userName);
  }
  onSaveData() {
    // saving recipes to the database
    this.recipeServ.saveRecipes();
  }
  onFetchData() {
    this.recipeServ.fetchRecipes();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
