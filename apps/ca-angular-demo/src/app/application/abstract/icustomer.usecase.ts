import { Injectable, Signal } from "@angular/core";
import { Customer } from "../../domain/customer";
import { Observable } from "rxjs";

@Injectable()
export abstract class ICustomerUseCase {
  abstract deleteCustomer(arg0: string): void;
  abstract updateCustomer(customer: Customer): Observable<Customer>;
  abstract createCustomer(customer: Customer): Observable<Customer>;
  abstract getCustomers(): Signal<Customer[]>;
}
