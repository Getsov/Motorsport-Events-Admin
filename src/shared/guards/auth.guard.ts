import { Injectable, effect } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  hasUser: boolean = false;
  constructor(private authService: AuthService, private router: Router) {
    effect(() => {
      this.hasUser = this.authService.currentUser === undefined ? false : true;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.hasUser) {
      console.log('pass');

      return true;
    } else {
      console.log();

      console.log('denny');

      // Navigate to the login page or another unauthorized page
      return this.router.navigateByUrl('user/login');
    }
  }
}
