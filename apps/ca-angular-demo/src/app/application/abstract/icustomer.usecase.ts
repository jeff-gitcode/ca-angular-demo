import { Injectable, Signal } from "@angular/core";
import { Customer } from "../../domain/customer";
import { Observable } from "rxjs";

@Injectable()
export abstract class ICustomerUseCase {
  abstract createCustomer(customer: Customer): void;
  abstract getCustomers(): Signal<Customer[]>;
}
