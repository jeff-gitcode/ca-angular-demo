import { Moment } from "moment";

export abstract class IAuthService {
  abstract login(email: string, password: string): boolean;
  abstract logout(): void;
  abstract isLoggedIn(): boolean;
  abstract isLoggedOut(): boolean;
  abstract getExpiration(): Moment;
}
