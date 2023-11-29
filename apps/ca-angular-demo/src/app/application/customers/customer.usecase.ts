import { Inject, Injectable } from "@angular/core";

import { Customer } from "../../domain/customer";
import { ICustomerRepository } from "../abstract/irepository";
import { ICustomerUseCase } from "../abstract/icustomer.usecase";


@Injectable()
export class CustomerUseCase implements ICustomerUseCase{
  constructor(@Inject(ICustomerRepository)private customerRepository: ICustomerRepository) {
  }

  async getCustomers(): Promise<Customer[]> {
    // Add your implementation here
    // For example, you can get the customers from the repository
    const customers = await this.customerRepository.getAll();
    return customers;
  }

  // async createCustomer(customer: Customer): Promise<Customer> {
  //   // Add your implementation here
  //   // For example, you can validate the customer data, generate an ID, and save it to the repository
  //   const createdCustomer = await this.customerRepository.create(customer);
  //   return createdCustomer;
  // }
}
