import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import moment, { Moment } from "moment";

import { IAuthService } from "../application/abstract/iauth.service";
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "./local-storage.service";

export interface AuthResponse {
  expiresIn: string;
  idToken: string;
}

@Injectable()
export class AuthService implements IAuthService {
  isLoggedIn$ = new BehaviorSubject(false);
  $isLoggedIn = signal(false);
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {

  }

  login(email: string, password: string): boolean {
    // return this.http.post<User>('/api/login', {email, password})
    //     .do(res => this.setSession)
    //     .shareReplay();
    const authResult: AuthResponse = {
      expiresIn: '3600',
      idToken: '123'
    };

    this.setSession(authResult);
    this.$isLoggedIn.set(true);
    this.isLoggedIn$.next(true);
    return true;
  }

  private setSession(authResult: AuthResponse) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    this.localStorageService.setItem('id_token', authResult.idToken);
    this.localStorageService.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    this.localStorageService.removeItem("id_token");
    this.localStorageService.removeItem("expires_at");
    this.$isLoggedIn.set(false);
    this.isLoggedIn$.next(false);
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): Moment {
    const expiration: string = this.localStorageService.getItem("expires_at") ?? "";
    if (!expiration) {
      return moment(0);
    }
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
