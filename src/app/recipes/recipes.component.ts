import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';
import { RouteAnimations } from '../shared/route-animation';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  animations: [RouteAnimations]
})
export class RecipesComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  constructor() {}

  ngOnInit() {}

}
