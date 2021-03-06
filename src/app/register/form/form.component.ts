import { RouteAnimations } from './../../shared/route-animation';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginMode: string;
  isLogging = false;
  isLogged = false;
  constructor(private router: Router, private thisRoute: ActivatedRoute, private authServ: AuthService) {}

  onSubmit(form) {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.userEmail;
    const password = form.value.password;
    // changing isLogging state
    this.isLogging = true;
    // submitting the form
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
        this.authServ.loginMode = value.loginMode;
      }
    );
    // checking that the submitting succeeded and getting userName data
    this.authServ.processSuccess.subscribe(
      (data: boolean) => {
        this.isLogged = data;
        if (this.isLogged) {
          // changing isLogging state again
          this.isLogging = false;
          // finally navigating to the main page after some delay
          this.router.navigate(['/welcome']);
        }
      }
    );
  }
}
