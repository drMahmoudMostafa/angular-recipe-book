import { RouteAnimations } from './../../shared/route-animation';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-select-recipe',
  templateUrl: './select-recipe.component.html',
  styleUrls: ['./select-recipe.component.css'],
  animations: [RouteAnimations]
})
export class SelectRecipeComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
