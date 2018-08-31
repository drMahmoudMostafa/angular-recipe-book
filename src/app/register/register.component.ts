import {
  Component,
  HostBinding
} from '@angular/core';
import {
  RouteAnimations
} from '../shared/route-animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [RouteAnimations]
})
export class RegisterComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
}
