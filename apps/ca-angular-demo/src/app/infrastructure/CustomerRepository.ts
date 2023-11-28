import { ICustomerRepository } from "../application/abstract/irepository";
import { Customer } from "../domain/customer";


export class CustomerRepository implements ICustomerRepository {
  private customers: Customer[] = [];

  async getById(id: string): Promise<Customer | null> {
    const customer = this.customers.find((customer) => customer.id === id);
    return Promise.resolve(customer || null);
  }

  async getAll(): Promise<Customer[]> {
    return Promise.resolve(this.customers);
  }

  async create(entity: Customer): Promise<Customer> {
    this.customers.push(entity);
    return Promise.resolve(entity);
  }

  async update(entity: Customer): Promise<Customer> {
    const index = this.customers.findIndex((c) => c.id === entity.id);
    if (index !== -1) {
      this.customers[index] = entity;

      return Promise.resolve(this.customers[index]);
    }
    return Promise.reject();
  }

  async delete(id: string): Promise<void> {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
    return Promise.resolve();
  }
}