import { RecipesService } from './recipes.service';
import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';
import { RouteAnimations } from '../shared/route-animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  animations: [RouteAnimations]
})
export class RecipesComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  constructor(private router: Router, private recipesServ: RecipesService) {}

  ngOnInit() {
    if (this.recipesServ.recipes.length === 0) {
      this.router.navigate(['/recipes', 'new']);
    } else {
      this.router.navigate(['/recipes']);
    }
  }

}
