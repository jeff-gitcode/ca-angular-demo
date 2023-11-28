
import { Injectable } from '@angular/core';
import { Customer } from '../../domain/customer';
import { IRepository } from './irepository';

@Injectable()
export abstract class ICustomerRepository extends IRepository<Customer> {
  // Add any additional methods specific to the customer repository here
}
