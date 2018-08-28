import { AuthService } from './auth.service';
import {
  Router,
  ActivatedRoute,
  Data
} from '@angular/router';
import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';
import { RouteAnimations } from '../shared/route-animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [RouteAnimations]
})
export class RegisterComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  loginMode: string;
  constructor(private router: Router, private thisRoute: ActivatedRoute, private authServ: AuthService) {}

  onSubmit(form) {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.userEmail;
    const password = form.value.password;
    if (this.loginMode === 'signUp') {
      this.authServ.signUp(firstName, lastName, email, password);
    } else {
      this.authServ.logIn(email, password);
    }
  }
  ngOnInit() {
    this.thisRoute.data.subscribe(
      (value: Data) => {
        this.loginMode = value.loginMode;
      }
    );
  }
}
