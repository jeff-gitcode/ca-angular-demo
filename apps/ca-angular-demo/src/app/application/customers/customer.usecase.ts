import { Inject, Injectable, Signal, WritableSignal } from "@angular/core";

import { Customer } from "../../domain/customer";
import { ICustomerRepository } from "../abstract/irepository";
import { ICustomerUseCase } from "../abstract/icustomer.usecase";
import { Observable } from "rxjs";
import { ICustomerService } from "../abstract/icustomer.service";


@Injectable()
export class CustomerUseCase implements ICustomerUseCase{
  constructor(@Inject(ICustomerService)private service: ICustomerService) {
  }

  deleteCustomer(id: string): Observable<Object> {
    return this.service.delete(id);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.service.update(customer);
  }

  getCustomers(): Observable<Customer[]> {
    // Add your implementation here
    // For example, you can get the customers from the repository
    return this.service.getAll();
  }

  createCustomer(customer: Customer): Observable<Customer> {
    // Add your implementation here
    // For example, you can validate the customer data, generate an ID, and save it to the repository
    return this.service.create(customer);
  }
}
