import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import moment, { Moment } from "moment";

import { IAuthService } from "../application/abstract/iauth.service";

export interface AuthResponse {
  expiresIn: string;
  idToken: string;
}

@Injectable()
export class AuthService implements IAuthService {

  constructor(private http: HttpClient) {

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
    return true;
  }

  private setSession(authResult: AuthResponse) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration() : Moment{
    const expiration: string = localStorage.getItem("expires_at") ?? "";
    if (!expiration) {
      return moment(0);
    }
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
