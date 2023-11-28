import { Injectable } from "@angular/core";
import { Customer } from "../../domain/customer";

@Injectable()
export abstract class ICustomerUseCase {
  abstract createCustomer(customer: Customer): Promise<Customer>;
}
