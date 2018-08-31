import { AuthService } from './../register/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService {

  constructor(private router: Router, private authServ: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authServ.token === '') {
      return false;
      this.router.navigate(['/login']);
    } else {
      return true;
    }
  }
}
