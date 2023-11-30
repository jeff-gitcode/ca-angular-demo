import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

import { Customer } from '../domain/customer';
import { ICustomerService } from '../application/abstract/icustomer.service';

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

  users = toSignal(this.customers$, { initialValue: [] as Customer[] });
  constructor(private http: HttpClient) { }

  delete(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.apiUrl}/${customer.id}`, customer, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  create(entity: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, entity, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getAll(): Signal<Customer[]> {
    return this.users;
  }
}
