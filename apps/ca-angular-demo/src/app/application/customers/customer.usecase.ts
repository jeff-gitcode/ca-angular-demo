import { Inject, Injectable, WritableSignal } from "@angular/core";

import { Customer } from "../../domain/customer";
import { ICustomerRepository } from "../abstract/irepository";
import { ICustomerUseCase } from "../abstract/icustomer.usecase";
import { Observable } from "rxjs";


@Injectable()
export class CustomerUseCase implements ICustomerUseCase{
  constructor(@Inject(ICustomerRepository)private customerRepository: ICustomerRepository) {
  }

  getCustomers(): WritableSignal<Customer[]> {
    // Add your implementation here
    // For example, you can get the customers from the repository
    return this.customerRepository.getAll();
  }

  createCustomer(customer: Customer): void {
    // Add your implementation here
    // For example, you can validate the customer data, generate an ID, and save it to the repository
    return this.customerRepository.create(customer);
  }
}
