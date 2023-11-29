import { signal } from '@angular/core';
import { Customer } from '../domain/customer';

export const initialCustomers: Customer [] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@email.com",
    password: "12345",
    token: ""
  }
];

export const customers = signal<Customer[]>(initialCustomers);
