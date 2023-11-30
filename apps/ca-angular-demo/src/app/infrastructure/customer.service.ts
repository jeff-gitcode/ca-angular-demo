import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

import { Customer } from '../domain/customer';
import { ICustomerService } from '../application/abstract/icustomer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements ICustomerService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private customers$ = this.http.get<Customer[]>(this.apiUrl);
  users = toSignal(this.customers$, { initialValue: [] as Customer[] });

  constructor(private http: HttpClient) { }

  create(entity: Customer): void {
    throw new Error('Method not implemented.');
  }

  getAll(): Signal<Customer[]> {
    return this.users;
  }
}
