import { Moment } from "moment";
import { Injectable, Signal } from "@angular/core";

import { IAuthService } from "../abstract/iauth.service";
import { IAuthUseCase } from "../abstract/iauth.usecase";

@Injectable({ providedIn: 'root' })
export class AuthUseCase implements IAuthUseCase {
  constructor(private authService: IAuthService) {}

  loginSignal(): Signal<boolean> {
    return this.authService.$isLoggedIn;
  }

  login(email: string, password: string): boolean {
    return this.authService.login(email, password);
  }

  logout(): void {
    this.authService.logout();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return this.authService.isLoggedOut();
  }

  getExpiration(): Moment {
    return this.authService.getExpiration();
  }
}
