import { AuthService } from './../register/auth.service';

import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  // use this for the register route
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authServ.userName === '') {
      // there is no user logged in
      return true;
    } else {
      return false;
    }
  }
  // use this for appMainModule
  constructor(private router: Router, private authServ: AuthService) {}
  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authServ.userName === '') {
      // there is no user logged in
      return false;
      this.router.navigate(['/login']);
    } else {
      return true;
    }
  }
}
