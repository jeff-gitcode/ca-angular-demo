import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

import { Customer } from '../domain/customer';
import { ICustomerService } from '../application/abstract/icustomer.service';
import { customers } from './customer.signal';
import { toWritableSignal } from './toWritableSignal';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements ICustomerService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private customers$ = this.http.get<Customer[]>(this.apiUrl);
  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  }

  // customers = toSignal(this.customers$, { initialValue: [] as Customer[] });
  customers = toWritableSignal(this.customers$, [] as Customer[]);
  selectedCustomer = signal("0");
  constructor(private http: HttpClient) { }

  setSelectedCustomer(id: string): void {
    this.selectedCustomer.set(id);
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  update(customer: Customer): Observable<Customer> {
    this.setSelectedCustomer(customer.id);

    return this.http.patch<Customer>(`${this.apiUrl}/${customer.id}`, customer, this.httpOptions).pipe(
      tap((data: Customer) => {
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }

  create(entity: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, entity, this.httpOptions).pipe(
      tap(data => {
        // let indexToUpdate = this.customers.findIndex(item => item.id === newItem.id);
        // this.itemArray.items[indexToUpdate] = newItem;

        // this.customers.update(r => [...r, data]);
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }

  getAll(): WritableSignal<Customer[]> {
    // return this.customers.asReadonly();
    return this.customers;
  }
}
