import { Injectable } from "@angular/core";
import { Moment } from "moment";

Injectable()
export abstract class IAuthUseCase {

  abstract login(email: string, password: string): boolean;
  abstract logout(): void;
  abstract isLoggedIn(): boolean;
  abstract isLoggedOut(): boolean;
  abstract getExpiration(): Moment;
}
