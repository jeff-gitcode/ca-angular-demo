import { Injectable, Signal } from "@angular/core";
import { Moment } from "moment";
import { BehaviorSubject } from "rxjs";

Injectable()
export abstract class IAuthUseCase {
  abstract isLoggedInStatus(): BehaviorSubject<boolean> ;
  abstract loginSignal(): Signal<boolean>;
  abstract login(email: string, password: string): boolean;
  abstract logout(): void;
  abstract isLoggedIn(): boolean;
  abstract isLoggedOut(): boolean;
  abstract getExpiration(): Moment;
}
