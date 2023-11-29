import { Injectable, WritableSignal } from "@angular/core";
import { ICustomerRepository } from "../application/abstract/irepository";
import { Customer } from "../domain/customer";
import { customers } from "./customer.signal";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerRepository implements ICustomerRepository {
  // private customers: Customer[] = [];

  // async getById(id: string): Promise<Customer | null> {
  //   const customer = customers.find((customer) => customer.id === id);
  //   return Promise.resolve(customer || null);
  // }

  getAll(): WritableSignal<Customer[]> {
    return customers;
  }

  create(entity: Customer): void {
    const newCustomeor = customers.update(r => [...r, entity]);
    return newCustomeor;
  }

  // async update(entity: Customer): Promise<Customer> {
  //   const index = this.customers.findIndex((c) => c.id === entity.id);
  //   if (index !== -1) {
  //     this.customers[index] = entity;

  //     return Promise.resolve(this.customers[index]);
  //   }
  //   return Promise.reject();
  // }

  // async delete(id: string): Promise<void> {
  //   const index = this.customers.findIndex((customer) => customer.id === id);
  //   if (index !== -1) {
  //     this.customers.splice(index, 1);
  //   }
  //   return Promise.resolve();
  // }
}
