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
    this.authServ.userName.subscribe(
      (data: string) => {
        console.log('userName before setting is : ' + this.userName);
        console.log('the value recieved from the auth service for userName is : ' + data);
        this.userName = data;
        console.log('so the userName in the component is : ' + this.userName);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log('HeaderComponent intialized');
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
