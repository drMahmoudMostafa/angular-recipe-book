import {
  Subscription
  // tslint:disable-next-line:import-blacklist
} from 'rxjs';
import {
  AuthService
} from './register/auth.service';
import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy
} from '@angular/core';

import firebase = require('firebase');
import {
  RouteAnimations
} from './shared/route-animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    RouteAnimations
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  isLogged = false;
  subscription: Subscription;
  constructor(private authServ: AuthService) {}
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBSkOhshYI3UFy1_TDFURzRFeGPqUnMK8w',
      authDomain: 'recipe-book-12837.firebaseapp.com'
    });
    this.subscription = this.authServ.processSuccess.subscribe(
      (value: boolean) => {
        setTimeout(() => {
          this.isLogged = value;
        }, 1000);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}
