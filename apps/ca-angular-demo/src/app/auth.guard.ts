import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { IAuthService } from "./application/abstract/iauth.service";
import { IAuthUseCase } from "./application/abstract/iauth.usecase";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authUseCase: IAuthUseCase, private router: Router) {


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authUseCase.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    console.log(this.authUseCase.isLoggedIn());
    return true;
  }
}
