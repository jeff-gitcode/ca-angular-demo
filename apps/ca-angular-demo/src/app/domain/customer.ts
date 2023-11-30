export interface Customer {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password?: string;
  readonly token?: string;
}
