import { Injectable, Signal, WritableSignal } from "@angular/core";
import { Customer } from "../../domain/customer";
import { Observable } from "rxjs";

@Injectable()
export abstract class ICustomerUseCase {
  abstract deleteCustomer(id: string): Observable<Object>;
  abstract updateCustomer(customer: Customer): Observable<Customer>;
  abstract createCustomer(customer: Customer): Observable<Customer>;
  abstract getCustomers(): WritableSignal<Customer[]>;
}
