import {
  Component,
  ViewEncapsulation,
  OnInit
} from '@angular/core';

import firebase = require('firebase');
import { RouteAnimations } from './shared/route-animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    RouteAnimations
  ]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBSkOhshYI3UFy1_TDFURzRFeGPqUnMK8w',
      authDomain: 'recipe-book-12837.firebaseapp.com'
    });
  }
}
