// import { Injectable, effect } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | boolean
//     | UrlTree
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree> {
//     if (!!this.authService.userDetails.accessToken) {
//       return true;
//     } else {
//       // Navigate to the login page or another unauthorized page
//       return this.router.navigateByUrl('user/login');
//     }
//   }
// }

import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isLoggedInGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!!authService.userDetails.accessToken) {
    return true;
  } else {
    router.navigateByUrl('user/login');
    return false;
  }
};

export const isLoggedOutGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!!authService.userDetails.accessToken) {
    return router.navigateByUrl('/');
  } else {
    return true;
  }
};

export const isOrganizerGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.userDetails.role === 'organizer') {
    return true;
  } else {
    return false;
  }
};
